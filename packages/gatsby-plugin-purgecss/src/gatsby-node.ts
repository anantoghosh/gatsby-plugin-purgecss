import { findLoader, insertLoader } from './utils';
import path from './paths';
import { stats } from './shared';
import { writeConfig } from './debug';
import { mergeAndConcat } from 'merge-anything';
import type { GatsbyNode } from 'gatsby';
import type { Configuration, RuleSetRule } from 'webpack';
import type { MergedOptions, Options } from './types';

const loadersRegex = /postcss-loader/;

// eslint-disable-next-line sonarjs/cognitive-complexity
export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = function (
  { actions, stage, getConfig },
  pluginOptions
) {
  const { plugins, ...options } = pluginOptions;
  const userOptions = (options as unknown) as Options;

  const defaultOptions: MergedOptions = {
    printSummary: true,
    printRejected: false,
    printAll: false,
    debug: false,
    develop: false,
    tailwind: false,
    ignore: [],
    purgeOnly: [],
    purgeCSSOptions: {
      rejected: userOptions.printRejected ?? false,
      content: userOptions.purgeCSSOptions?.content ? [] : [path.src],
      css: [],
      safelist: { standard: ['html', 'body'] },
    },
  };

  if (userOptions.tailwind) {
    defaultOptions.purgeCSSOptions.defaultExtractor = (content) =>
      content.match(/[^\s"'<>`]*[^\s"':<>`]/g) ?? [];
  }

  /** If safelist is an array, normalize it to object with standard key */
  if (
    userOptions.purgeCSSOptions?.safelist &&
    Array.isArray(userOptions.purgeCSSOptions.safelist)
  ) {
    userOptions.purgeCSSOptions.safelist = {
      standard: [...userOptions.purgeCSSOptions.safelist],
    };
  }

  const mergedUserOptions = mergeAndConcat(defaultOptions, userOptions);

  if (mergedUserOptions.printSummary && stage === 'build-html') {
    stats.printStats();
  }

  if (stage === 'develop-html' || stage === 'build-html') {
    return;
  }

  if (stage === 'develop' && !mergedUserOptions.develop) {
    return;
  }

  const config = getConfig() as Configuration;
  const existingRules = config.module?.rules as RuleSetRule[];

  const purgecssloader = {
    loader: path.loader,
    options: mergedUserOptions,
  } as RuleSetRule;

  for (const rules of existingRules) {
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
