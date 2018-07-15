/**
 * @typedef {import('webpack').Configuration} WebpackConfig
 * @typedef {import('webpack').RuleSetRule} RuleSetRule
 * @typedef {import('webpack').RuleSetLoader} RuleSetLoader
 */

import path from 'path';
import { findLoader, insertLoader } from './utils';

const PATHS = {
  src: path.join(process.cwd(), 'src/**/!(*.d).{ts,js,jsx,tsx}')
};

const loadersRegex = /stylus-loader|sass-loader|less-loader/;

export function onCreateWebpackConfig(
  { actions, stage, getConfig },
  { plugins, ...userOptions }
) {
  if (stage !== 'build-javascript') {
    return;
  }

  const { setWebpackConfig } = actions;

  userOptions = {
    content: [PATHS.src],
    whitelist: ['html', 'body'],
    ...userOptions
  };

  /**
   * @type {WebpackConfig}
   */
  const config = getConfig();
  const existingRules = config.module.rules;

  /**
   * @type {RuleSetLoader}
   */
  const purgecssloader = {
    loader: path.join(__dirname, 'loader.js'),
    options: userOptions
  };

  existingRules.forEach(rule => {
    if (Array.isArray(rule.oneOf)) {
      rule.oneOf.forEach(rule => {
        if (Array.isArray(rule.use)) {
          const index = findLoader(rule.use, loadersRegex);
          insertLoader(rule.use, index, purgecssloader);
        }
      });
    }
  });

  actions.replaceWebpackConfig(config);

  /**
   * @type {RuleSetRule}
   */
  const purgecssRule = {
    test: /.css$/,
    use: [purgecssloader]
  };

  setWebpackConfig({
    module: {
      rules: [purgecssRule]
    }
  });
}
