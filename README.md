# Gatsby Plugin Purgecss [![npm version](https://badge.fury.io/js/gatsby-plugin-purgecss.svg)](https://www.npmjs.com/package/gatsby-plugin-purgecss)

For Gatsby 2 only

[![CircleCI](https://circleci.com/gh/anantoghosh/gatsby-plugin-purgecss/tree/master.svg?style=svg)](https://circleci.com/gh/anantoghosh/gatsby-plugin-purgecss/tree/master)
[![Build Status](https://travis-ci.org/anantoghosh/gatsby-plugin-purgecss.svg?branch=master)](https://travis-ci.org/anantoghosh/gatsby-plugin-purgecss)
[![Coverage Status](https://coveralls.io/repos/github/anantoghosh/gatsby-plugin-purgecss/badge.svg?branch=master)](https://coveralls.io/github/anantoghosh/gatsby-plugin-purgecss?branch=master)
[![Renovate badge](https://camo.githubusercontent.com/d89df1f233d795498824e8739f439d2172d7ff12/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f72656e6f766174652d656e61626c65642d627269676874677265656e2e737667)](https://renovatebot.com/) [![Known Vulnerabilities](https://snyk.io/test/github/anantoghosh/gatsby-plugin-purgecss/badge.svg?targetFile=package.json)](https://snyk.io/test/github/anantoghosh/gatsby-plugin-purgecss?targetFile=package.json)
[![tested with jest](https://anantoghosh.github.io/stop-watch/jest_op.svg)](https://github.com/facebook/jest)

[![dependencies](https://david-dm.org/anantoghosh/gatsby-plugin-purgecss.svg)](https://david-dm.org/anantoghosh/gatsby-plugin-purgecss/)
[![dev dependencies](https://david-dm.org/anantoghosh/gatsby-plugin-purgecss/dev-status.svg)](https://david-dm.org/anantoghosh/gatsby-plugin-purgecss?type=dev)
[![peer dependencies](https://david-dm.org/anantoghosh/gatsby-plugin-purgecss/peer-status.svg)](https://david-dm.org/anantoghosh/gatsby-plugin-purgecss?type=peer)

## What is this plugin about?

**Remove unused css from css/sass/less/stylus files and modules in your Gatsby project using [purgecss](https://github.com/FullHuman/purgecss). 🎉**  

> **Please read [Help! Purgecss breaks my site 😯](#help-purgecss-breaks-my-site-) to make sure gatsby-plugin-purgecss does not cause you issues**

### Demo
When used in [gatsby-starter-bootstrap](https://github.com/jaxx2104/gatsby-starter-bootstrap)

![demo](https://anantoghosh.github.io/files/gatsby-starter-bootstrap.png)

When used in [gatsby-starter-bootstrap-cv](https://github.com/mhjadav/gatsby-starter-bootstrap-cv) (installed by default)

![demo](https://anantoghosh.github.io/files/gatsby-starter-bootstrap-cv.png)
## Supported files

- `.css` , `.module.css`
- `.scss`, `.sass`, `.module.scss`, `.module.sass` (via [gatsby-plugin-sass](https://next.gatsbyjs.org/packages/gatsby-plugin-sass/))
- `.less`, `.module.less` (via [gatsby-plugin-less](https://next.gatsbyjs.org/packages/gatsby-plugin-less/))
- `.styl`, `.module.styl` (via [gatsby-plugin-stylus](https://next.gatsbyjs.org/packages/gatsby-plugin-sass/))

## Installation

```sh
npm i gatsby-plugin-purgecss
```

### Usage

> **Add the plugin AFTER other css plugins**

```js
// gatsy-config.js
module.exports = {
  plugins: [
    `gatsby-plugin-stylus`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    // Add after these plugins if used
    `gatsby-plugin-purgecss`
  ]
};
```
  
## Help! Purgecss breaks my site 😯

**Make Purgecss behave correctly for your project**  
This section documents purgecss behavior in removing unused css. Most of the rules apply in any project and is not `gatsby-plugin-purgecss` specific.

#### Issue 1: CSS file not getting purged
For `gatsby-plugin-purgecss` to work on a css file it **must be imported by a script file inside your src folder**. This plugin depends on webpack to process css. **If webpack does not use the css file then `gatsby-plugin-purgecss` cannot process it.**

Also, make sure that you [included the plugin](#usage) after sass/less/stylus plugins. 

#### Issue 2: Selectors with dashes in name gets removed when used with named imports
For eg:
**style.css**
```css
.my-selector { color: 'white' }
```
**index.js**
```jsx
// Named import
import style from './style.css';
...
<div className={style.mySelector} /> ❌
```
Here `.my-selector` **will get removed** since purgecss by default cannot match it with `mySelector`.

**Read how to solve this issue in the ["Whitelist Solutions"](#whitelist-solutions) section.**

*Note: Directly importing and using the selector name as is will work as intended*
```jsx
import './style.css';
<div className={`my-selector`} /> ✅
```
#### Issue 3: Styles getting purged even though the script file has selector names
Make sure that the script file is in the `src` folder.  
If you want to look for selectors in another folder, use the [`content` option.](#options)

#### Issue 4: Getting "Could not parse file, skipping. Your build will not break."
> If you use postcss syntax based plugins then read [this](#using-with-postcss-syntax-plugins).

Something is wrong. Good news is `gatsby-plugin-purgecss` should not cause any issue in such cases, files which could not be parsed will be skipped. If you want to diagnose the problem then use the [`debug` option](#options).  Also, feel free to create a GitHub issue.

### Whitelist Solutions
You can use any of these techniques to stop purgecss from removing required styles
##### 1. Whitelist the selector using the whitelist option in gatsby-config.js
```js
whitelist: ['my-selector']
```
##### 2. For selector with dashes in them and using named imports
You *could* write it like `className={style['my-selector']}` instead.
##### 3. Use a JavaScript comment
```jsx
// my-selector
<div className={style.mySelector} />
```
This comment can be in any script file inside `src`.
##### 4.  Use Regex pattern to exclude many selectors
`whitelistPatterns` option is available from purgecss
```js
whitelistPatterns: [/^btn/]
```
For eg, this pattern will whitelist all selectors starting with btn: btn btn-primary btn-secondary etc.  
Look at the [`whitelistPatternsChildren` option](https://www.purgecss.com/configuration) in purgecss to also whitelist children of the selectors.
##### 5. Use purgecss ignore comment in css file
```css
/* purgecss ignore */
.my-selector { color: 'white' }
```
This comment will ignore the selector on the next line.
##### 5. Use purgecss ignore block comments in css file
```css
/* purgecss start ignore */
button { color: 'white' };
.yo { color: 'blue' };
/* purgecss end ignore */
```
This comment pair will ignore all css selectors between them.

### Improving Purgecss selector detection
Purgecss relies on extractors to get the list of selector used in a file. The default extractor considers every word of a file as a selector.
You could use your own extractor (or get one made by other community members) to improve detection and further decrease your css file size.
[Read more at Purgecss docs.](https://www.purgecss.com/extractors)

If you do find/write a better extractor suited for Gatsby, please help me add it to the docs. 

## Important Notes

### Running

This plugin only runs when building the project (`gatsby build`).  
It will print the amount of css removed.

### Size reporting
The size reported by this plugin is the approximate size of the css content *before* any optimizations have been performed.  
The actual file size should be smaller.

### Selector matching

This plugin loads css files (or transformed output from css plugins) and searches for matching selectors in js, jsx, ts, tsx files in `src/`. It does not know which css file belongs to which source file. Therefore, for eg., if there is a class `.module` in some css file, it will not be removed if it used in _any_ script file under `src/`.

### Whitelist ['html', 'body']

Since html and body tags do not appear in `src/` files, it is whitelisted by default to not be removed.  
Since v2.3.0, manually including 'html', 'body' is no longer required.

### Using with postcss syntax plugins
`gatsby-plugin-purgecss` is executed before postcss loader and can only purge css syntax. If you are using any syntax based postcss plugin, then it may not get purged. In such cases you will see "Could not parse file, skipping. Your build will not break." message. `gatsby-plugin-purgecss` will simply ignore the file and continue without issue.
It would be better if you use purgecss postcss plugin directly instead.
## Options

This plugins supports most purgecss options as is (except `css`).

> [Read about purgecss options in detail](https://www.purgecss.com/configuration)

```js
{
  resolve: `gatsby-plugin-purgecss`,
  options: {
    /**
     * Print the amount of css removed.
     * default: true
     **/
    rejected?: boolean,

    /**
     * Print the list of removed selectors.
     * Needs "rejected" option to be true
     * default: false
     **/
    printRejected?: boolean,

    /**
     * Stops from removing these selectors.
     * ['html', 'body'] are always whitelisted
     * since v2.3.0 manually including 'html', 'body' is no longer required
     **/
    whitelist?: Array<string>,

    /**
     * Enable debugging
     * It will write two files to disk. One with your webpack config and another with the errors encountered.
     * default: false
     **/
    debug?: boolean,

    /**
     * These options are available but not used by default.
     * Read more https://www.purgecss.com/configuration
     **/
    extractors?: Array<ExtractorsObj>,
    whitelistPatterns?: Array<RegExp>,
    whitelistPatternsChildren?: Array<RegExp>,
    keyframes?: boolean,
    fontFace?: boolean,

    /**
     * Files to search for selectors.
     **/
     // default: [path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx}')]
    content: Array<string | RawContent>,
  }
}
```

## Versioning

gatsby-plugin-purgecss uses [SemVer](http://semver.org/) for versioning.

## Acknowledgment

This project was made possible due to the incredible work done on the following projects:

- [purgecss](https://github.com/FullHuman/purgecss)
- [purgecss-loader](https://github.com/americanexpress/purgecss-loader)
- [gatsby](https://github.com/gatsbyjs/gatsby/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file
for details.
