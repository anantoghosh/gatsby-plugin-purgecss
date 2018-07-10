const path = require('path');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob')

const PATHS = {
  src: path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx}')
};

exports.onCreateWebpackConfig = (
  { actions, stage, rules, plugins, loaders },
  { postCssPlugins, ...userOptions }
) => {
  // if (stage !== 'build-javascript') {
  //   return;
  // }

  const { setWebpackConfig } = actions;

  userOptions = {
    // paths: [PATHS.src],
    whitelist: ['html', 'body'],
    ...userOptions
  };

  console.log(plugins);

  const rule = {
    // test: /stylus\.(s?(a|c)ss|less|styl)$/,
    test: /\.styl$/,
    use: [
      loaders.miniCssExtract(),
      loaders.style(),
      loaders.css({ importLoaders: 2 }),
      loaders.postcss({ plugins: postCssPlugins }),
      {
        loader: path.join(__dirname, 'loader.js'),
        options: userOptions
      }
    ]
  };

  setWebpackConfig({
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync(PATHS.src, { nodir: true }),
        ...userOptions
      })
    ]
  });
};
