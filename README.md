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

This plugin allows Gatsby to remove unused css from css/sass/less/stylus files and modules using [purgecss](https://github.com/FullHuman/purgecss).

## Supported files

- `.css` , `.module.css`
- `.scss`, `.sass`, `.module.scss`, `.module.sass` (via [gatsby-plugin-sass](https://next.gatsbyjs.org/packages/gatsby-plugin-sass/))
- `.less`, `.module.less` (via [gatsby-plugin-less](https://next.gatsbyjs.org/packages/gatsby-plugin-less/))
- `.styl`, `.module.styl` (via [gatsby-plugin-stylus](https://next.gatsbyjs.org/packages/gatsby-plugin-sass/))

## Installation

```sh
npm i --save-dev gatsby-plugin-purgecss
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

## Important Notes

### Running

This plugin only runs when building the project (`gatsby build`).  
It will print "gatsby-plugin-purgecss removed *x* selectors" where `x` is the number of selectors removed.

### Selector matching

This plugin loads css files (or transformed output from css plugins) and searches for matching selectors in js, jsx, ts, tsx files in `src/`. It does not know which css file belongs to which source file. Therefore, for eg., if there is a class `.module` in some css file, it will not be removed if it used in _any_ script file under `src/`.

### Whitelist ['html', 'body']

Since html and body tags do not appear in `src/` files, it is whitelisted by default to not be removed.  
If there is a need to modify the whitelist, it is recommended to keep these tags and append the required selectors using the option
`whitelist: ['html', 'body', '.my-selector']`

## Options

This plugins supports most purgecss options as is (except `css`).

> [Read about purgecss options in detail](https://www.purgecss.com/configuration)

```js
{
  resolve: `gatsby-plugin-purgecss`,
  options: {
    /**
     * Print the number of removed selectors.
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
     * default: ['html', 'body']
     * If you want to whitelist more selectors, make sure to include 'html', 'body' in the array.
     **/
    whitelist?: Array<string>,


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
