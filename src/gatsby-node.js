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
 * @typedef {object} OptionObject
 * @property {boolean} OptionObject.rejected
 * @property {string[]} OptionObject.content
 * @property {string[]} OptionObject.ignore
 * @property {string[]} OptionObject.purgeOnly
 * @property {boolean} OptionObject.debug
 * @property {boolean} OptionObject.printRejected
 * @property {string[]} OptionObject.whitelist
 * @property {boolean} OptionObject.printAll
 * @property {boolean} OptionObject.tailwind
 * @property {boolean} OptionObject.develop
 * @property {any[]} OptionObject.extractors
 */

export function onCreateWebpackConfig(
  { actions, stage, getConfig },
  { plugins, ...userOptions /** @type OptionObject */ }
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
    userOptions.defaultExtractor =
      /**
       * @param {string} content
       */
      content => content.match(/[\w-/.:]+(?<!:)/g) || [];
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
  const existingRules = config?.module?.rules;

  /**
   * @type {RuleSetLoader}
   */
  const purgecssloader = {
    loader: path.loader,
    options: userOptions
  };

  existingRules?.forEach(rule => {
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
