const config = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            options: {
              cacheDirectory: true,
              babelrc: false,
              sourceType: 'unambiguous',
              presets: [[], [], []],
              plugins: [
                'gatsby-plugin-purgecss/node_modules/babel-plugin-remove-graphql-queries/index.js',
                [],
                [],
                []
              ]
            },
            loader:
              'gatsby-plugin-purgecss/node_modules/babel-loader/lib/index.js'
          }
        ]
      },
      {
        test: /\.ya?ml/,
        use: [
          {
            options: {},
            loader:
              'gatsby-plugin-purgecss/node_modules/json-loader/index.js'
          },
          {
            options: {},
            loader:
              'gatsby-plugin-purgecss/node_modules/yaml-loader/index.js'
          }
        ]
      },
      {
        use: [
          {
            loader:
              'gatsby-plugin-purgecss/node_modules/url-loader/dist/cjs.js',
            options: { limit: 10000, name: 'static/[name]-[hash].[ext]' }
          }
        ],
        test: /\.(eot|otf|ttf|woff(2)?)(\?.*)?$/
      },
      {
        use: [
          {
            loader:
              'gatsby-plugin-purgecss/node_modules/url-loader/dist/cjs.js',
            options: { limit: 10000, name: 'static/[name]-[hash].[ext]' }
          }
        ],
        test: /\.(ico|svg|jpg|jpeg|png|gif|webp)(\?.*)?$/
      },
      {
        use: [
          {
            loader:
              'gatsby-plugin-purgecss/node_modules/url-loader/dist/cjs.js',
            options: { name: 'static/[name]-[hash].[ext]' }
          }
        ],
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga|flac)$/
      },
      {
        oneOf: [
          {
            use: [
              {
                options: {},
                loader:
                  'gatsby-plugin-purgecss/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/css-loader/index.js',
                options: [Object]
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/postcss-loader/lib/index.js',
                options: [Object]
              }
            ],
            test: /\.module\.css$/
          },
          {
            use: [
              {
                options: {},
                loader:
                  'gatsby-plugin-purgecss/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/css-loader/index.js',
                options: [Object]
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/postcss-loader/lib/index.js',
                options: [Object]
              }
            ],
            test: /\.css$/
          }
        ]
      },
      { test: /HashHistory/, use: 'null-loader' },
      { test: /MemoryHistory/, use: 'null-loader' },
      { test: /StaticRouter/, use: 'null-loader' },
      { test: /MemoryRouter/, use: 'null-loader' },
      { test: /HashRouter/, use: 'null-loader' },
      {
        oneOf: [
          {
            test: /\.module\.styl$/,
            use: [
              {
                options: {},
                loader:
                  'gatsby-plugin-purgecss/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/css-loader/index.js',
                options: [Object]
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/postcss-loader/lib/index.js',
                options: [Object]
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/stylus-loader/index.js',
                options: [Object]
              }
            ]
          },
          {
            test: /\.styl$/,
            exclude: /\.module\.styl$/,
            use: [
              {
                options: {},
                loader:
                  'gatsby-plugin-purgecss/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/css-loader/index.js',
                options: [Object]
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/postcss-loader/lib/index.js',
                options: [Object]
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/stylus-loader/index.js',
                options: [Object]
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
                options: {},
                loader:
                  'gatsby-plugin-purgecss/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/css-loader/index.js',
                options: [Object]
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/postcss-loader/lib/index.js',
                options: [Object]
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/sass-loader/lib/loader.js',
                options: [Object]
              }
            ]
          },
          {
            test: /\.s(a|c)ss$/,
            use: [
              {
                options: {},
                loader:
                  'gatsby-plugin-purgecss/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/css-loader/index.js',
                options: [Object]
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/postcss-loader/lib/index.js',
                options: [Object]
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/sass-loader/lib/loader.js',
                options: [Object]
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
                options: {},
                loader:
                  'gatsby-plugin-purgecss/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/css-loader/index.js',
                options: [Object]
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/postcss-loader/lib/index.js',
                options: [Object]
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/less-loader/dist/cjs.js',
                options: [Object]
              }
            ]
          },
          {
            test: /\.less$/,
            use: [
              {
                options: {},
                loader:
                  'gatsby-plugin-purgecss/node_modules/mini-css-extract-plugin/dist/loader.js'
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/css-loader/index.js',
                options: [Object]
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/postcss-loader/lib/index.js',
                options: [Object]
              },
              {
                loader:
                  'gatsby-plugin-purgecss/node_modules/less-loader/dist/cjs.js',
                options: [Object]
              }
            ]
          }
        ]
      },
      {
        oneOf: [
          {
            test: /\.module\.test$/,
            use: 'null-loader'
          },
          {
            test: /\.test$/,
            use: 'null-loader'
          }
        ]
      }
    ]
  }
};

export default config;
