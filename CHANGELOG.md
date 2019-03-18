## [3.1.1](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/3.1.0...3.1.1) (2019-03-18)

Minor documentation changes.

# [3.1.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/3.0.0...3.1.0) (2019-01-01)


### Bug Fixes

* Add ignored file size to New Css Size ([59cba42](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/59cba42))
* Check ignore array length too ([7ce76f2](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/7ce76f2))


### Features

* Add `purgeOnly` option ([47eb2a5](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/47eb2a5))



# [3.0.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/2.4.0...3.0.0) (2018-12-30)

### Breaking Change
`gatsby-plugin-purgecss` now works after postcss.  
If you have added `gatsby-plugin-postcss` in your `gatsby-config.js` file, specify `gatsby-plugin-purgecss` after the `gatsby-plugin-postcss` plugin.  
Tailwind support added using the `tailwind: true` option.
Running the plugin when using `gatsby develop` added using the `develop: true` option.


### Features

* Add running on develop using `develop` option ([6b0c3f9](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/6b0c3f9))
* Add tailwind option support ([78600f8](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/78600f8))
* Run plugin after postcss ([7957f55](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/7957f55))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/2.3.0...2.4.0) (2018-08-17)

With this release, diagnosing purging related issues has been made a lot easier.  
Read the docs for all the information.

### Features

* `printRejected` option now prints the name of the file ([a97a713](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/a97a713))
* Shows name of file being processed for many other cases (for errors, ignores etc.)
* Add `printAll` option ([72bc43b](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/72bc43b))
  > `printRejected` by default print only 100 removed selector per file. `printAll` allows it to print all of the removed selectors.
* Add `ignore` option ([a97a713](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/a97a713))
  > Ignore files and folders from being processed by this plugin.



<a name="2.3.0"></a>
# [2.3.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/2.2.0...2.3.0) (2018-08-16)


### Features

* Make 'html' 'body' whitelist default ([014d829](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/014d829))
* Add new documentation for purgecss issues

<a name="2.2.0"></a>
# [2.2.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/2.1.0...2.2.0) (2018-08-15)


### Bug Fixes

* css loader rule incorrectly was parsing scss files too ([d90c420](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/d90c420))
* **stats:** handle 0 size ([6b12ac8](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/6b12ac8))


### Features

* Add reduced size reporting ([9eb2d42](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/9eb2d42))
* **debug:** Add debugging option ([5829ead](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/5829ead))
* **debug:** Move fs-extra to dependency ([6a9a4da](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/6a9a4da))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/2.0.2...2.1.0) (2018-08-14)


### Features

* Add new default message, Add new option printRejected ([342c4d4](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/342c4d4))



<a name="2.0.2"></a>
## [2.0.2](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/2.0.1...2.0.2) (2018-08-02)


### Bug Fixes

* **deps:** pin dependencies ([419056e](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/419056e))
* **deps:** update react monorepo to v16.4.2 ([e1db6e9](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/e1db6e9))



<a name="2.0.1"></a>
## [2.0.1](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/2.0.0...2.0.1) (2018-07-16)



<a name="2.0.0"></a>
# [2.0.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/0.3.1...2.0.0) (2018-07-15)



<a name="0.3.1"></a>
## [0.3.1](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/0.3.0...0.3.1) (2018-07-14)


### Bug Fixes

* **release:** Fix incorrect git ignore ([e7d68de](https://github.com/anantoghosh/gatsby-plugin-purgecss/commit/e7d68de))



<a name="0.3.0"></a>
# [0.3.0](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/0.2.2...0.3.0) (2018-07-14)



<a name="0.2.2"></a>
## [0.2.2](https://github.com/anantoghosh/gatsby-plugin-purgecss/compare/0.2.1...0.2.2) (2018-07-13)



<a name="0.2.1"></a>
## 0.2.1 (2018-07-12)



