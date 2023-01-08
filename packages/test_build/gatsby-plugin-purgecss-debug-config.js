{
  name: 'build-javascript',
  context: 'D:\\Code\\gatsby-plugin-purgecss\\packages\\test_build',
  entry: {
    app: 'D:\\\\Code\\\\gatsby-plugin-purgecss\\\\packages\\\\test_build\\\\.cache\\\\production-app'
  },
  output: {
    filename: '[name]-[contenthash].js',
    chunkFilename: '[name]-[contenthash].js',
    path: 'D:\\\\Code\\\\gatsby-plugin-purgecss\\\\packages\\\\test_build\\\\public',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.mjs$/i,
        resolve: { byDependency: { esm: { fullySpecified: false } } }
      },
      {
        test: /\.js$/i,
        descriptionData: { type: 'module' },
        resolve: { byDependency: { esm: { fullySpecified: false } } }
      },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: [Function: include],
        type: 'javascript/auto',
        use: [Function: use]
      },
      {
        test: /\.ya?ml$/,
        type: 'json',
        use: [
          {
            options: {},
            loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\yaml-loader\\index.js'
          }
        ]
      },
      {
        use: [
          {
            loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 10000,
              name: 'static/[name]-[hash].[ext]',
              fallback: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\file-loader\\dist\\cjs.js'
            }
          }
        ],
        test: /\.(eot|otf|ttf|woff(2)?)(\?.*)?$/
      },
      {
        use: [
          {
            loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 10000,
              name: 'static/[name]-[hash].[ext]',
              fallback: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\file-loader\\dist\\cjs.js'
            }
          }
        ],
        test: /\.(ico|svg|jpg|jpeg|png|gif|webp|avif)(\?.*)?$/
      },
      {
        use: [
          {
            loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\url-loader\\dist\\cjs.js',
            options: {
              limit: 10000,
              name: 'static/[name]-[hash].[ext]',
              fallback: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\file-loader\\dist\\cjs.js'
            }
          }
        ],
        test: /\.(mp4|webm|ogv|wav|mp3|m4a|aac|oga|flac)$/
      },
      {
        use: [
          {
            loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\file-loader\\dist\\cjs.js',
            options: { name: 'static/[name]-[hash].[ext]' }
          }
        ],
        test: /\.pdf$/
      },
      {
        oneOf: [
          {
            use: [
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: { modules: { namedExport: true } }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  url: [Function: url],
                  sourceMap: false,
                  modules: {
                    auto: undefined,
                    namedExport: true,
                    localIdentName: '[name]--[local]--[hash:hex:5]',
                    exportLocalsConvention: 'dashesOnly',
                    exportOnlyLocals: false
                  }
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\packages\\gatsby-plugin-purgecss\\loader.js',
                options: {
                  tailwind: false,
                  printSummary: true,
                  printRejected: true,
                  printAll: true,
                  develop: true,
                  debug: true,
                  ignore: [
                    '/ignored.css',
                    'ignored/',
                    'pages2/style_ignore.css'
                  ],
                  purgeOnly: [ 'pages/', 'pages2/' ],
                  purgeCSSOptions: {
                    rejected: true,
                    content: [
                      'D:\\Code\\gatsby-plugin-purgecss\\packages\\test_build\\src\\**\\!(*.d).{ts,js,jsx,tsx}'
                    ],
                    css: [],
                    safelist: {
                      standard: [ 'html', 'body', 'whitelist', /Regex$/ ]
                    }
                  }
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  execute: false,
                  sourceMap: false,
                  postcssOptions: [Function: postcssOptions]
                }
              }
            ],
            test: /\.module\.css$/
          },
          {
            use: [
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: { modules: undefined }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  url: [Function: url],
                  sourceMap: false,
                  modules: false
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\packages\\gatsby-plugin-purgecss\\loader.js',
                options: {
                  tailwind: false,
                  printSummary: true,
                  printRejected: true,
                  printAll: true,
                  develop: true,
                  debug: true,
                  ignore: [
                    '/ignored.css',
                    'ignored/',
                    'pages2/style_ignore.css'
                  ],
                  purgeOnly: [ 'pages/', 'pages2/' ],
                  purgeCSSOptions: {
                    rejected: true,
                    content: [
                      'D:\\Code\\gatsby-plugin-purgecss\\packages\\test_build\\src\\**\\!(*.d).{ts,js,jsx,tsx}'
                    ],
                    css: [],
                    safelist: {
                      standard: [ 'html', 'body', 'whitelist', /Regex$/ ]
                    }
                  }
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  execute: false,
                  sourceMap: false,
                  postcssOptions: [Function: postcssOptions]
                }
              }
            ],
            test: /\.css$/
          }
        ]
      },
      {
        oneOf: [
          {
            test: /\.module\.styl$/,
            use: [
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: { modules: { namedExport: true } }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  url: [Function: url],
                  sourceMap: false,
                  modules: {
                    auto: undefined,
                    namedExport: true,
                    localIdentName: '[name]--[local]--[hash:hex:5]',
                    exportLocalsConvention: 'dashesOnly',
                    exportOnlyLocals: false
                  }
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\packages\\gatsby-plugin-purgecss\\loader.js',
                options: {
                  tailwind: false,
                  printSummary: true,
                  printRejected: true,
                  printAll: true,
                  develop: true,
                  debug: true,
                  ignore: [
                    '/ignored.css',
                    'ignored/',
                    'pages2/style_ignore.css'
                  ],
                  purgeOnly: [ 'pages/', 'pages2/' ],
                  purgeCSSOptions: {
                    rejected: true,
                    content: [
                      'D:\\Code\\gatsby-plugin-purgecss\\packages\\test_build\\src\\**\\!(*.d).{ts,js,jsx,tsx}'
                    ],
                    css: [],
                    safelist: {
                      standard: [ 'html', 'body', 'whitelist', /Regex$/ ]
                    }
                  }
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  execute: false,
                  sourceMap: false,
                  postcssOptions: [Function: postcssOptions]
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\stylus-loader\\index.js',
                options: { plugins: [] }
              }
            ]
          },
          {
            test: /\.styl$/,
            use: [
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: { modules: undefined }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  url: [Function: url],
                  sourceMap: false,
                  modules: false
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\packages\\gatsby-plugin-purgecss\\loader.js',
                options: {
                  tailwind: false,
                  printSummary: true,
                  printRejected: true,
                  printAll: true,
                  develop: true,
                  debug: true,
                  ignore: [
                    '/ignored.css',
                    'ignored/',
                    'pages2/style_ignore.css'
                  ],
                  purgeOnly: [ 'pages/', 'pages2/' ],
                  purgeCSSOptions: {
                    rejected: true,
                    content: [
                      'D:\\Code\\gatsby-plugin-purgecss\\packages\\test_build\\src\\**\\!(*.d).{ts,js,jsx,tsx}'
                    ],
                    css: [],
                    safelist: {
                      standard: [ 'html', 'body', 'whitelist', /Regex$/ ]
                    }
                  }
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  execute: false,
                  sourceMap: false,
                  postcssOptions: [Function: postcssOptions]
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\stylus-loader\\index.js',
                options: { plugins: [] }
              }
            ]
          }
        ]
      },
      {
        oneOf: [
          {
            test: /\.module\.s(a|c)ss$/,
            use: [
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: { modules: { namedExport: true } }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  url: [Function: url],
                  sourceMap: false,
                  modules: {
                    auto: undefined,
                    namedExport: true,
                    localIdentName: '[name]--[local]--[hash:hex:5]',
                    exportLocalsConvention: 'dashesOnly',
                    exportOnlyLocals: false
                  }
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\packages\\gatsby-plugin-purgecss\\loader.js',
                options: {
                  tailwind: false,
                  printSummary: true,
                  printRejected: true,
                  printAll: true,
                  develop: true,
                  debug: true,
                  ignore: [
                    '/ignored.css',
                    'ignored/',
                    'pages2/style_ignore.css'
                  ],
                  purgeOnly: [ 'pages/', 'pages2/' ],
                  purgeCSSOptions: {
                    rejected: true,
                    content: [
                      'D:\\Code\\gatsby-plugin-purgecss\\packages\\test_build\\src\\**\\!(*.d).{ts,js,jsx,tsx}'
                    ],
                    css: [],
                    safelist: {
                      standard: [ 'html', 'body', 'whitelist', /Regex$/ ]
                    }
                  }
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  execute: false,
                  sourceMap: false,
                  postcssOptions: [Function: postcssOptions]
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: undefined,
                  sassOptions: {},
                  additionalData: undefined
                }
              }
            ]
          },
          {
            test: /\.s(a|c)ss$/,
            use: [
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: { modules: undefined }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  url: [Function: url],
                  sourceMap: false,
                  modules: false
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\packages\\gatsby-plugin-purgecss\\loader.js',
                options: {
                  tailwind: false,
                  printSummary: true,
                  printRejected: true,
                  printAll: true,
                  develop: true,
                  debug: true,
                  ignore: [
                    '/ignored.css',
                    'ignored/',
                    'pages2/style_ignore.css'
                  ],
                  purgeOnly: [ 'pages/', 'pages2/' ],
                  purgeCSSOptions: {
                    rejected: true,
                    content: [
                      'D:\\Code\\gatsby-plugin-purgecss\\packages\\test_build\\src\\**\\!(*.d).{ts,js,jsx,tsx}'
                    ],
                    css: [],
                    safelist: {
                      standard: [ 'html', 'body', 'whitelist', /Regex$/ ]
                    }
                  }
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  execute: false,
                  sourceMap: false,
                  postcssOptions: [Function: postcssOptions]
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: undefined,
                  sassOptions: {},
                  additionalData: undefined
                }
              }
            ]
          }
        ]
      },
      {
        oneOf: [
          {
            test: /\.module\.less$/,
            use: [
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: { modules: { namedExport: true } }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  url: [Function: url],
                  sourceMap: false,
                  modules: {
                    auto: undefined,
                    namedExport: true,
                    localIdentName: '[name]--[local]--[hash:hex:5]',
                    exportLocalsConvention: 'dashesOnly',
                    exportOnlyLocals: false
                  }
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\packages\\gatsby-plugin-purgecss\\loader.js',
                options: {
                  tailwind: false,
                  printSummary: true,
                  printRejected: true,
                  printAll: true,
                  develop: true,
                  debug: true,
                  ignore: [
                    '/ignored.css',
                    'ignored/',
                    'pages2/style_ignore.css'
                  ],
                  purgeOnly: [ 'pages/', 'pages2/' ],
                  purgeCSSOptions: {
                    rejected: true,
                    content: [
                      'D:\\Code\\gatsby-plugin-purgecss\\packages\\test_build\\src\\**\\!(*.d).{ts,js,jsx,tsx}'
                    ],
                    css: [],
                    safelist: {
                      standard: [ 'html', 'body', 'whitelist', /Regex$/ ]
                    }
                  }
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  execute: false,
                  sourceMap: false,
                  postcssOptions: [Function: postcssOptions]
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\less-loader\\dist\\cjs.js',
                options: { lessOptions: {} }
              }
            ]
          },
          {
            test: /\.less$/,
            use: [
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: { modules: undefined }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  url: [Function: url],
                  sourceMap: false,
                  modules: false
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\packages\\gatsby-plugin-purgecss\\loader.js',
                options: {
                  tailwind: false,
                  printSummary: true,
                  printRejected: true,
                  printAll: true,
                  develop: true,
                  debug: true,
                  ignore: [
                    '/ignored.css',
                    'ignored/',
                    'pages2/style_ignore.css'
                  ],
                  purgeOnly: [ 'pages/', 'pages2/' ],
                  purgeCSSOptions: {
                    rejected: true,
                    content: [
                      'D:\\Code\\gatsby-plugin-purgecss\\packages\\test_build\\src\\**\\!(*.d).{ts,js,jsx,tsx}'
                    ],
                    css: [],
                    safelist: {
                      standard: [ 'html', 'body', 'whitelist', /Regex$/ ]
                    }
                  }
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  execute: false,
                  sourceMap: false,
                  postcssOptions: [Function: postcssOptions]
                }
              },
              {
                loader: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\less-loader\\dist\\cjs.js',
                options: { lessOptions: {} }
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    IgnorePlugin {
      options: { resourceRegExp: /^\.\/locale$/, contextRegExp: /moment$/ },
      checkIgnore: [Function: bound checkIgnore]
    },
    DefinePlugin {
      definitions: {
        'process.env': '({})',
        'process.env.NODE_ENV': '"production"',
        'process.env.PUBLIC_DIR': '"D:\\\\Code\\\\gatsby-plugin-purgecss\\\\packages\\\\test_build/public"',
        'process.env.BUILD_STAGE': '"build-javascript"',
        'process.env.CYPRESS_SUPPORT': undefined,
        'process.env.GATSBY_QUERY_ON_DEMAND': 'false',
        'process.env.GATSBY_LOGGER': '"ink"',
        'process.env.GATSBY_QUERY_ON_DEMAND_LOADING_INDICATOR': '"true"',
        'process.env.GATSBY_REPORTER_ISVERBOSE': '"0"',
        'process.env.GATSBY_SLICES': '"true"',
        __BASE_PATH__: '""',
        __PATH_PREFIX__: '""',
        __ASSET_PREFIX__: '""',
        __TRAILING_SLASH__: '"always"',
        BROWSER_ESM_ONLY: 'true',
        'global.hasPartialHydration': false
      }
    },
    GatsbyWebpackVirtualModules {},
    BabelConfigItemsCacheInvalidatorPlugin {
      name: 'BabelConfigItemsCacheInvalidatorPlugin'
    },
    MiniCssExtractPlugin {
      _sortedModulesCache: WeakMap { <items unknown> },
      options: {
        filename: '[name].[contenthash].css',
        ignoreOrder: false,
        experimentalUseImportModule: false,
        chunkFilename: '[name].[contenthash].css'
      },
      runtimeOptions: {
        insert: undefined,
        linkType: 'text/css',
        attributes: undefined
      }
    },
    GatsbyWebpackStatsExtractor {
      plugin: { name: 'GatsbyWebpackStatsExtractor' },
      publicPath: ''
    },
    StaticQueryMapper {
      store: {
        dispatch: [Function (anonymous)],
        subscribe: [Function: subscribe],
        getState: [Function: getState],
        replaceReducer: [Function: replaceReducer],
        '@@observable': [Function: observable]
      },
      name: 'StaticQueryMapper'
    }
  ],
  devtool: 'source-map',
  performance: { hints: false },
  mode: 'production',
  resolveLoader: {
    modules: [
      'D:\\Code\\gatsby-plugin-purgecss\\packages\\test_build\\node_modules',
      'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby\\dist\\loaders',
      'node_modules'
    ]
  },
  resolve: {
    extensions: [
      '.mjs',  '.js',
      '.jsx',  '.wasm',
      '.json', '.ts',
      '.tsx'
    ],
    alias: {
      'gatsby$': 'D:\\\\Code\\\\gatsby-plugin-purgecss\\\\packages\\\\test_build\\\\.cache\\\\gatsby-browser-entry.js',
      '@babel/runtime': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\@babel\\runtime',
      '@reach/router': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\@gatsbyjs\\reach-router',
      'react-lifecycles-compat': 'D:\\\\Code\\\\gatsby-plugin-purgecss\\\\packages\\\\test_build\\\\.cache\\\\react-lifecycles-compat.js',
      'react-server-dom-webpack': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\react-server-dom-webpack',
      '@pmmmwh/react-refresh-webpack-plugin': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\@pmmmwh\\react-refresh-webpack-plugin',
      'socket.io-client': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\socket.io-client',
      'webpack-hot-middleware': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\@gatsbyjs\\webpack-hot-middleware',
      '$virtual': 'D:\\Code\\gatsby-plugin-purgecss\\packages\\test_build\\.cache\\_this_is_virtual_fs_path_\\$virtual',
      'gatsby-core-utils/create-content-digest': 'D:\\\\Code\\\\gatsby-plugin-purgecss\\\\packages\\\\test_build\\\\.cache\\\\create-content-digest-browser-shim',
      react: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\react',
      'react-dom': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\react-dom',
      'object.assign': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby\\dist\\internal-plugins\\bundle-optimisations\\polyfills\\object-assign.js',
      'object-assign$': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby\\dist\\internal-plugins\\bundle-optimisations\\polyfills\\object-assign.js',
      '@babel/runtime/helpers/extends.js$': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby\\dist\\internal-plugins\\bundle-optimisations\\polyfills\\object-assign.js',
      'unfetch$': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby\\dist\\internal-plugins\\bundle-optimisations\\polyfills\\fetch.js',
      'unfetch/polyfill$': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby\\dist\\internal-plugins\\bundle-optimisations\\polyfills\\no-op.js',
      'isomorphic-unfetch$': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby\\dist\\internal-plugins\\bundle-optimisations\\polyfills\\fetch.js',
      'isomorphic-fetch$': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby\\dist\\internal-plugins\\bundle-optimisations\\polyfills\\fetch.js',
      'whatwg-fetch$': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby\\dist\\internal-plugins\\bundle-optimisations\\polyfills\\whatwg-fetch.js',
      'url-polyfill$': 'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby\\dist\\internal-plugins\\bundle-optimisations\\polyfills\\no-op.js'
    },
    plugins: [
      CoreJSResolver {
        _coreJSNodeModulesPath: 'D:\\Code\\gatsby-plugin-purgecss\\node_modules'
      },
      CacheFolderResolver {
        requestsFolder: 'D:\\Code\\gatsby-plugin-purgecss\\packages\\test_build\\.cache'
      },
      GatsbyThemeComponentShadowingResolverPlugin {
        themes: [
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby/dist/internal-plugins/dev-404-page',
            themeName: 'dev-404-page'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby/dist/internal-plugins/load-babel-config',
            themeName: 'load-babel-config'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby/dist/internal-plugins/internal-data-bridge',
            themeName: 'internal-data-bridge'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby/dist/internal-plugins/prod-404-500',
            themeName: 'prod-404-500'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing',
            themeName: 'webpack-theme-component-shadowing'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby/dist/internal-plugins/bundle-optimisations',
            themeName: 'bundle-optimisations'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby/dist/internal-plugins/functions',
            themeName: 'functions'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-stylus',
            themeName: 'gatsby-plugin-stylus'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-sass',
            themeName: 'gatsby-plugin-sass'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-less',
            themeName: 'gatsby-plugin-less'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/packages/gatsby-plugin-purgecss',
            themeName: 'gatsby-plugin-purgecss'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-typescript',
            themeName: 'gatsby-plugin-typescript'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/packages/test_build',
            themeName: 'default-site-plugin'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby-plugin-page-creator',
            themeName: 'gatsby-plugin-page-creator'
          },
          {
            themeDir: 'D:/Code/gatsby-plugin-purgecss/node_modules/gatsby/dist/internal-plugins/partytown',
            themeName: 'partytown'
          }
        ],
        projectRoot: 'D:/Code/gatsby-plugin-purgecss/packages/test_build',
        extensions: [
          '.mjs',  '.js',
          '.jsx',  '.wasm',
          '.json', '.ts',
          '.tsx'
        ],
        extensionsCategory: {
          js: 'code',
          jsx: 'code',
          ts: 'code',
          tsx: 'code',
          cjs: 'code',
          mjs: 'code',
          coffee: 'code',
          json: 'json',
          yaml: 'json',
          yml: 'json',
          css: 'stylesheet',
          sass: 'stylesheet',
          scss: 'stylesheet',
          less: 'stylesheet',
          'css.js': 'stylesheet',
          jpeg: 'image',
          jpg: 'image',
          jfif: 'image',
          png: 'image',
          tiff: 'image',
          webp: 'image',
          avif: 'image',
          gif: 'image',
          woff: 'font',
          woff2: 'font'
        },
        additionalShadowExtensions: [
          {
            key: '.mjs',
            value: [ '.mjs', '.js', '.jsx', '.ts', '.tsx' ]
          },
          {
            key: '.js',
            value: [ '.mjs', '.js', '.jsx', '.ts', '.tsx' ]
          },
          {
            key: '.jsx',
            value: [ '.mjs', '.js', '.jsx', '.ts', '.tsx' ]
          },
          {
            key: '.ts',
            value: [ '.mjs', '.js', '.jsx', '.ts', '.tsx' ]
          },
          {
            key: '.tsx',
            value: [ '.mjs', '.js', '.jsx', '.ts', '.tsx' ]
          },
          { key: '.json', value: [ '.json' ] }
        ]
      }
    ]
  },
  target: [ 'web', 'es5' ],
  optimization: {
    runtimeChunk: { name: 'webpack-runtime' },
    mangleExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        defaultVendors: false,
        framework: {
          chunks: 'all',
          name: 'framework',
          test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types)[\\/]/,
          priority: 40,
          enforce: true
        },
        lib: {
          test: [Function: test],
          name: [Function: name],
          priority: 30,
          minChunks: 1,
          reuseExistingChunk: true
        },
        commons: { name: 'commons', minChunks: 2, priority: 20 },
        shared: {
          test: [Function: test],
          name: [Function: name],
          priority: 10,
          minChunks: 2,
          reuseExistingChunk: true
        },
        styles: {
          test: [Function: test],
          name: 'styles',
          priority: 40,
          enforce: true
        }
      },
      maxAsyncRequests: Infinity,
      maxInitialRequests: 25,
      minSize: 20000
    },
    minimizer: [
      TerserPlugin {
        options: {
          test: /\.[cm]?js(\?.*)?$/i,
          extractComments: true,
          parallel: 7,
          include: undefined,
          exclude: /\.min\.js/,
          minimizer: {
            implementation: [AsyncFunction: terserMinify] {
              getMinimizerVersion: [Function (anonymous)]
            },
            options: {
              ie8: false,
              mangle: { safari10: true },
              parse: { ecma: 5 },
              compress: { ecma: 5 },
              output: { ecma: 5 }
            }
          }
        }
      },
      CssMinimizerPlugin {
        options: {
          test: /\.css(\?.*)?$/i,
          warningsFilter: [Function: warningsFilter],
          parallel: 7,
          include: undefined,
          exclude: undefined,
          minify: [AsyncFunction: cssnanoMinify],
          minimizerOptions: {
            preset: [
              'default',
              {
                svgo: {
                  full: true,
                  plugins: [
                    'cleanupAttrs',
                    'cleanupEnableBackground',
                    'cleanupIDs',
                    'cleanupListOfValues',
                    'cleanupNumericValues',
                    'collapseGroups',
                    'convertColors',
                    'convertPathData',
                    'convertStyleToAttrs',
                    'convertTransform',
                    'inlineStyles',
                    'mergePaths',
                    'minifyStyles',
                    'moveElemsAttrsToGroup',
                    'moveGroupAttrsToElems',
                    'prefixIds',
                    'removeComments',
                    'removeDesc',
                    'removeDoctype',
                    'removeEditorsNSData',
                    'removeEmptyAttrs',
                    'removeEmptyContainers',
                    'removeEmptyText',
                    'removeHiddenElems',
                    'removeMetadata',
                    'removeNonInheritableGroupAttrs',
                    'removeRasterImages',
                    'removeScriptElement',
                    'removeStyleElement',
                    'removeTitle',
                    'removeUnknownsAndDefaults',
                    'removeUnusedNS',
                    'removeUselessDefs',
                    'removeUselessStrokeAndFill',
                    'removeXMLProcInst',
                    'reusePaths',
                    'sortAttrs'
                  ]
                }
              }
            ]
          }
        }
      }
    ]
  },
  cache: {
    type: 'filesystem',
    name: 'build-javascript',
    cacheLocation: 'D:\\Code\\gatsby-plugin-purgecss\\packages\\test_build\\.cache\\webpack\\stage-build-javascript',
    buildDependencies: {
      config: [
        'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby\\dist\\utils\\webpack.config.js',
        'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby\\dist\\internal-plugins\\webpack-theme-component-shadowing\\gatsby-node.js',
        'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby\\dist\\internal-plugins\\bundle-optimisations\\gatsby-node.js',
        'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby-plugin-stylus\\gatsby-node.js',
        'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby-plugin-sass\\gatsby-node.js',
        'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby-plugin-less\\gatsby-node.js',
        'D:\\Code\\gatsby-plugin-purgecss\\packages\\gatsby-plugin-purgecss\\gatsby-node.js',
        'D:\\Code\\gatsby-plugin-purgecss\\node_modules\\gatsby-plugin-typescript\\gatsby-node.js'
      ]
    }
  }
}