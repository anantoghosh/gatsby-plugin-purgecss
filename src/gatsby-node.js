/**
 * @typedef {import('webpack').Configuration} WebpackConfig
 * @typedef {import('webpack').RuleSetRule} RuleSetRule
 * @typedef {import('webpack').RuleSetLoader} RuleSetLoader
 */

import { findLoader, insertLoader } from './utils';
import path from './paths';
import { stats, Debug } from './shared';

const loadersRegex = /postcss-loader/;

/**
 * @param {object} param0
 * @param {object} param1
 */
export function onCreateWebpackConfig(
  { actions, stage, getConfig },
  { plugins, ...userOptions }
) {
  const whitelist = ['html', 'body'];

  if (userOptions.whitelist) {
    userOptions.whitelist = [...whitelist, ...userOptions.whitelist];
  } else {
    userOptions.whitelist = whitelist;
  }

  userOptions = {
    content: [path.src],
    rejected: true,
    printRejected: false,
    printAll: false,
    debug: false,
    develop: false,
    tailwind: false,
    ignore: [],
    purgeOnly: [],
    extractors: [],
    ...userOptions
  };

  if (userOptions.tailwind) {
    userOptions.extractors = [
      {
        extractor: class {
          /**
           * @param {object} content
           */
          static extract(content) {
            return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
          }
        },
        extensions: ['js', 'ts', 'jsx', 'tsx', 'md', 'mdx']
      },
      ...userOptions.extractors
    ];
  }

  if (userOptions.rejected && stage === 'build-html') {
    stats.printStats();
  }

  if (stage === 'develop-html' || stage === 'build-html') {
    return;
  } else if (stage === 'develop') {
    if (!userOptions.develop) {
      return;
    }
  }

  const { setWebpackConfig } = actions;

  /**
   * @type {WebpackConfig}
   */
  const config = getConfig();
  const existingRules = config.module.rules;

  /**
   * @type {RuleSetLoader}
   */
  const purgecssloader = {
    loader: path.loader,
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

  if (userOptions.debug) {
    Debug.writeConfig(getConfig());
  }
}
