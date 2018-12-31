// modified from https://github.com/americanexpress/purgecss-loader

/**
 * @typedef {import('webpack').loader.LoaderContext} LoaderContext
 * @typedef {object} OptionObject
 * @property {boolean} OptionObject.rejected
 * @property {string[]} OptionObject.content
 * @property {string[]} OptionObject.ignore
 * @property {string[]} OptionObject.purgeOnly
 * @property {boolean} OptionObject.debug
 * @property {boolean} OptionObject.printRejected
 * @property {boolean} OptionObject.whitelist
 * @property {boolean} OptionObject.printAll
 */

import PurgeCss from 'purgecss';
import { getOptions } from 'loader-utils';
import { stats, Debug } from './shared';
import { color, normalizePath } from './utils';

/**
 * Purgecss Loader
 * @this {LoaderContext & {rootContext:string}}
 * @param {string} source
 */
export default function loader(source) {
  const options = /** @type {OptionObject} */ (getOptions(this));

  if (options.rejected) {
    stats.addSize(source);
  }

  if (Array.isArray(options.ignore) && options.ignore.length > 0) {
    const normalizedPath = normalizePath(this.resourcePath, this.rootContext);

    if (options.ignore.some(file => normalizedPath.includes(file))) {
      console.log('\ngatsby-plugin-purgecss: Ignored ', this.resourcePath);
      stats.addRemovedSize(source);
      return source;
    }
  }

  if (Array.isArray(options.purgeOnly) && options.purgeOnly.length > 0) {
    const normalizedPath = normalizePath(this.resourcePath, this.rootContext);

    if (options.purgeOnly.some(file => normalizedPath.includes(file))) {
      console.log(
        '\ngatsby-plugin-purgecss: Only processing ',
        this.resourcePath
      );
    } else {
      stats.addRemovedSize(source);
      return source;
    }
  }

  let css;
  try {
    // @ts-ignore
    css = new PurgeCss({
      css: [{ raw: source }],
      ...options
    }).purge();
  } catch (error) {
    console.log(
      '\ngatsby-plugin-purgecss: Could not parse file, skipping. Your build will not break.\n',
      this.resourcePath
    );

    if (options.debug) {
      Debug.writeAppendError(error);
    } else {
      console.log('Use debug option to investigate further.');
    }

    return source;
  }

  if (options.rejected) {
    const rejected = css[0].rejected;

    stats.add(rejected.length);
    stats.addRemovedSize(css[0].css);

    if (options.printRejected && Array.isArray(rejected)) {
      const filtered = rejected.map(val => {
        return val.replace('\n', '');
      });
      console.log(color.FgGreen, '\nFrom: ', this.resourcePath);
      console.log(
        color.Reset,
        'Removed Selectors: ',
        options.printAll ? JSON.stringify(filtered) : filtered
      );
    }
  }

  return css[0].css;
}
