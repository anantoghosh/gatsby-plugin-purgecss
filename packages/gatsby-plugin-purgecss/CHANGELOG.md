

## [6.2.1](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/6.2.0...6.2.1) (2023-01-09)

* Update docs

# [6.2.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/6.1.2...6.2.0) (2023-01-08)

### Features

* Support gatsby 5 ([7a0df4f](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/7a0df4f0f6bbfa7193f565332f2f9ac7931d4452))
* Update packages

## [6.1.2](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/6.1.1...6.1.2) (2022-04-09)

- Maintenance release.
- Updated packages.

## [6.1.1](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/6.1.0...6.1.1) (2022-03-01)

- Maintenance release.
- Updated packages.

# [6.1.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/6.0.2...6.1.0) (2021-10-31)

### Features

* add support and test for gatsby v4 ([691b322](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/691b322867aa2bb076adb4112cc9d1c356ff7d35))

## [6.0.2](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/6.0.1...6.0.2) (2021-05-16)


### Bug Fixes

* [#958](https://github.com/anantoghosh/gatsby-plugin-purgecss/issues/958) make content option overridable ([d3fd7bc](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/d3fd7bc180ec953d10577b4b58331b8c74e79520))

## [6.0.1](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/6.0.0...6.0.1) (2021-04-12)


### Bug Fixes

* Set correct peerDependency on gatsby ([c5df7f1](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/c5df7f10d2e6c147326c3c1f6a0dddf1dc6ba971))

# [6.0.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/5.0.0...6.0.0) (2021-03-02)

### BREAKING CHANGES

- Updated to PurgeCSS 4.
- Changes to options format.

#### Migration from < v6

1. Remove `rejected` option. Instead use `printSummary: false` if you **don't** want the stats to show.
2. PurgeCSS options are now defined under PurgeCSSOptions
   - Move whitelist to PurgeCSSOptions -> safelist
   - Move content to PurgeCSSOptions -> content
   - Move and update any other Purge 
   CSS options used under the same key.
     https://purgecss.com/configuration.html#options

```js
// gatsby-config.js BEFORE
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        rejected: true,
        printRejected:true,
        ignore: ['/ignore.css'],
        whitelist: ['mySelector']
      },
    },
```

```js
// gatsby-config.js AFTER
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected:true,
        ignore: ['/ignore.css'],
        purgeCSSOptions: {
          safelist: ['mySelector']
        },
      },
    },
```

### Bug Fixes

- update tailwind regex ([f7602e3](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/f7602e3b74f45ad0cb31141f79ec818ce980f043))

### Features

- Move to typescript
- Update to latest PurgeCSS v4.

# [5.0.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/4.0.1...5.0.0) (2020-03-23)

### Features

- Update tailwind regex ([791c06a](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/791c06a))
- Upgrade to PurgeCSS v2 ([d2e8831](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/d2e8831))
- Loader now runs asynchronously

### BREAKING CHANGES

Major update to purgecss may require updated config.  
If using extractors, change to the new extractor format

```js
extractors: [
  {
    extractor: (content) => {
      // return array of css selectors
    },
    extensions: ["js"],
  },
];
```

## [4.0.1](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/4.0.0...4.0.1) (2019-08-27)

### Bug Fixes

- Add `md` and `mdx` extension to the tailwind extractor ([ba2d81e](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/ba2d81e))

# [4.0.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/3.1.1...4.0.0) (2019-05-16)

### Build System

- **tailwind:** Updates config, tests for tailwind v1 ([d7c2fc6](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/d7c2fc6))
- Increased minimum version of purgecss required (minor)
- Updated fs-extra to v8 (major)

### BREAKING CHANGES

- **tailwind:** tailwind v1 uses different config format.
  Updated tests and config.

## [3.1.1](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/3.1.0...3.1.1) (2019-03-18)

Minor documentation changes.

# [3.1.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/3.0.0...3.1.0) (2019-01-01)

### Bug Fixes

- Add ignored file size to New Css Size ([59cba42](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/59cba42))
- Check ignore array length too ([7ce76f2](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/7ce76f2))

### Features

- Add `purgeOnly` option ([47eb2a5](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/47eb2a5))

# [3.0.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/2.4.0...3.0.0) (2018-12-30)

### Breaking Change

`gatsby-plugin-purgecss` now works after postcss.  
If you have added `gatsby-plugin-postcss` in your `gatsby-config.js` file, specify `gatsby-plugin-purgecss` after the `gatsby-plugin-postcss` plugin.  
Tailwind support added using the `tailwind: true` option.
Running the plugin when using `gatsby develop` added using the `develop: true` option.

### Features

- Add running on develop using `develop` option ([6b0c3f9](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/6b0c3f9))
- Add tailwind option support ([78600f8](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/78600f8))
- Run plugin after postcss ([7957f55](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/7957f55))

<a name="2.4.0"></a>

# [2.4.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/2.3.0...2.4.0) (2018-08-17)

With this release, diagnosing purging related issues has been made a lot easier.  
Read the docs for all the information.

### Features

- `printRejected` option now prints the name of the file ([a97a713](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/a97a713))
- Shows name of file being processed for many other cases (for errors, ignores etc.)
- Add `printAll` option ([72bc43b](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/72bc43b))
  > `printRejected` by default print only 100 removed selector per file. `printAll` allows it to print all of the removed selectors.
- Add `ignore` option ([a97a713](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/a97a713))
  > Ignore files and folders from being processed by this plugin.

<a name="2.3.0"></a>

# [2.3.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/2.2.0...2.3.0) (2018-08-16)

### Features

- Make 'html' 'body' whitelist default ([014d829](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/014d829))
- Add new documentation for purgecss issues

<a name="2.2.0"></a>

# [2.2.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/2.1.0...2.2.0) (2018-08-15)

### Bug Fixes

- css loader rule incorrectly was parsing scss files too ([d90c420](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/d90c420))
- **stats:** handle 0 size ([6b12ac8](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/6b12ac8))

### Features

- Add reduced size reporting ([9eb2d42](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/9eb2d42))
- **debug:** Add debugging option ([5829ead](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/5829ead))
- **debug:** Move fs-extra to dependency ([6a9a4da](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/6a9a4da))

<a name="2.1.0"></a>

# [2.1.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/2.0.2...2.1.0) (2018-08-14)

### Features

- Add new default message, Add new option printRejected ([342c4d4](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/342c4d4))

<a name="2.0.2"></a>

## [2.0.2](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/2.0.1...2.0.2) (2018-08-02)

### Bug Fixes

- **deps:** pin dependencies ([419056e](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/419056e))
- **deps:** update react monorepo to v16.4.2 ([e1db6e9](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/e1db6e9))

<a name="2.0.1"></a>

## [2.0.1](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/2.0.0...2.0.1) (2018-07-16)

<a name="2.0.0"></a>

# [2.0.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/0.3.1...2.0.0) (2018-07-15)

<a name="0.3.1"></a>

## [0.3.1](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/0.3.0...0.3.1) (2018-07-14)

### Bug Fixes

- **release:** Fix incorrect git ignore ([e7d68de](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/e7d68de))

<a name="0.3.0"></a>

# [0.3.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/0.2.2...0.3.0) (2018-07-14)

<a name="0.2.2"></a>

## [0.2.2](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/0.2.1...0.2.2) (2018-07-13)

<a name="0.2.1"></a>

## 0.2.1 (2018-07-12)
