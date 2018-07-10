const path = require('path');
const util = require('util');

const PATHS = {
  src: path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx}')
};

const otherLoaders = ['stylus-loader', 'sass-loader', 'less-loader']

function findinUse(use, terms) {
  let results = [];

  if (typeof use === 'string') {
    return [];
  } else if (Array.isArray(use)) {
    use.map((singleLoader, index) => {
      let loaderString;
      if (typeof singleLoader === 'string') {
        loaderString = singleLoader;
      } else if (typeof singleLoader === 'object') {
        loaderString = singleLoader.loader;
      }

      terms.map(term => {
        if (loaderString.includes(term)) results.push({ use, index });
      });
    });
  }

  // console.log(util.inspect(results, { depth: 7 }));
  return results;
}

exports.onCreateWebpackConfig = (
  { actions, stage, rules, loaders, getConfig },
  { plugins, postCssPlugins, ...userOptions }
) => {
  if (stage !== 'build-javascript') {
    return;
  }

  const { setWebpackConfig } = actions;

  userOptions = {
    content: [PATHS.src],
    whitelist: ['html', 'body'],
    ...userOptions
  };

  const prevConfig = getConfig();
  const existingRules = prevConfig.module.rules;

  // console.log(util.inspect(existingRules, {depth: 7}));

  let results = [];
  existingRules.filter(singleRule => {
    if (typeof singleRule === 'object') {
      if (singleRule.test) {
        results = findinUse(singleRule.use, otherLoaders);
      } else if (singleRule.oneOf && Array.isArray(singleRule.oneOf)) {
        singleRule.oneOf.map(e => {
          results.push(...findinUse(e.use, otherLoaders));
        });
      }
    }
  });

  results.map(rule => {
    rule.use.splice(rule.index, 0, {
      loader: path.join(__dirname, 'loader.js'),
      options: userOptions
    });
  });

  console.log(util.inspect(prevConfig, { depth: 7 }));

  actions.replaceWebpackConfig(prevConfig)

  const rule = {
    test: /.css$/,
    use: [
      {
        loader: path.join(__dirname, 'loader.js'),
        options: userOptions
      }
    ]
  };

  setWebpackConfig({
    module: {
      rules: [rule]
    }
  });
};
