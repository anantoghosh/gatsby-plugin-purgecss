import Purgecss from 'purgecss';
import { stats } from './shared';
import { writeAppendError } from './debug';
import { color, normalizePath } from './utils';
import type { LoaderDefinitionFunction } from 'webpack';
import type { MergedOptions } from './types';

// eslint-disable-next-line sonarjs/cognitive-complexity
const purgeCSSLoader: LoaderDefinitionFunction<MergedOptions> = function loader(this, source) {
  if (Buffer.isBuffer(source)) {
    console.warn('gatsby-plugin-purgecss: Cannot process raw buffers');
    return;
  }

  const callback = this.async();

  const options = this.getOptions();

  if (options.printSummary) {
    stats.addSize(source);
  }

  if (Array.isArray(options.ignore) && options.ignore.length > 0) {
    const normalizedPath = normalizePath(this.resourcePath, this.rootContext);

    if (options.ignore.some((file) => normalizedPath.includes(file))) {
      console.log('gatsby-plugin-purgecss: Ignored', this.resourcePath);
      stats.addRemovedSize(source);
      callback(undefined, source);
      return;
    }
  }

  if (Array.isArray(options.purgeOnly) && options.purgeOnly.length > 0) {
    const normalizedPath = normalizePath(this.resourcePath, this.rootContext);

    if (options.purgeOnly.some((file) => normalizedPath.includes(file))) {
      console.log('gatsby-plugin-purgecss: Only processing', this.resourcePath);
    } else {
      stats.addRemovedSize(source);
      callback(undefined, source);
      return;
    }
  }

  void new Purgecss()
    .purge({
      ...options.purgeCSSOptions,
      css: [{ raw: source }],
    })
    .then((result) => {
      if (options.printSummary) {
        stats.addRemovedSize(result[0].css);
      }

      const rejected = result[0].rejected;
      if (options.printRejected && Array.isArray(rejected)) {
        const filtered = rejected.map((value) => {
          return value.replace('\n', '');
        });
        console.log(color.FgGreen, '\nFrom:', this.resourcePath);
        console.log(
          color.Reset,
          'Removed Selectors:',
          options.printAll ? JSON.stringify(filtered) : filtered
        );
      }

      callback(undefined, result[0].css);
    })
    .catch((error: unknown) => {
      console.log(
        '\ngatsby-plugin-purgecss: Could not parse file, skipping. Your build will not break.\n',
        this.resourcePath,
        error
      );

      if (options.debug) {
        writeAppendError(error);
      } else {
        console.log('Use debug option to investigate further.');
      }

      callback(error as Error, source);
    });
};

export default purgeCSSLoader;
