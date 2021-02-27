import { findLoader, insertLoader } from './utils';
import path from './paths';
import { stats } from './shared';
import { writeConfig } from './debug';
import type { GatsbyNode } from 'gatsby';
import type { Configuration } from 'webpack';
import type { Options } from './types';

const loadersRegex = /postcss-loader/;

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = function (
  { actions, stage, getConfig },
  pluginOptions
) {
  const whitelist = ['html', 'body'];
  const { plugins, ...options } = pluginOptions ?? {};
  const userOptions = (options as unknown) as Options;

  if (userOptions.purgeCSSOptions?.safelist) {
    userOptions.safelist = [...whitelist, ...userOptions.safelist];
  } else {
    userOptions.safelist = whitelist;
  }

  const mergedUserOptions: Options = {
    rejected: true,
    printRejected: false,
    printAll: false,
    debug: false,
    develop: false,
    tailwind: false,
    ignore: [],
    purgeOnly: [],
    ...userOptions,
  };

  if (mergedUserOptions.tailwind) {
    mergedUserOptions.purgeCSSOptions.defaultExtractor = (content) =>
      content.match(/[\w-/:]+(?<!:)/g) ?? [];
  }

  if (mergedUserOptions.rejected && stage === 'build-html') {
    stats.printStats();
  }

  if (stage === 'develop-html' || stage === 'build-html') {
    return;
  }

  if (stage === 'develop' && !mergedUserOptions.develop) {
    return;
  }

  const config = getConfig() as Configuration;
  const existingRules = config.module?.rules;

  /**
   * @type {RuleSetLoader}
   */
  const purgecssloader = {
    loader: path.loader,
    options: mergedUserOptions,
  };

  for (const rules of existingRules ?? []) {
    for (const rule of rules.oneOf ?? []) {
      if (Array.isArray(rule.use)) {
        const index = findLoader(rule.use, loadersRegex);
        insertLoader(rule.use, index, purgecssloader);
      }
    }
  }

  actions.replaceWebpackConfig(config);

  if (mergedUserOptions.debug) {
    writeConfig(getConfig());
  }
};
