// modified from https://github.com/americanexpress/purgecss-loader

/**
 * @typedef {import('webpack').loader.LoaderContext} LoaderContext
 * @typedef {object} OptionObject
 * @property {boolean} OptionObject.rejected
 * @property {string[]} OptionObject.content
 * @property {string[]} OptionObject.ignore
 * @property {boolean} OptionObject.debug
 * @property {boolean} OptionObject.printRejected
 * @property {boolean} OptionObject.whitelist
 */

import PurgeCss from 'purgecss';
import { getOptions } from 'loader-utils';
import { stats, Debug } from './shared';
import path from 'path';

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

  if (Array.isArray(options.ignore)) {
    const relativePath = this.resourcePath.replace(
      path.normalize(this.rootContext),
      ''
    );
    const normalizedPath = relativePath.split(path.sep).join('/');

    if (options.ignore.some(file => normalizedPath.includes(file))) {
      console.log('\ngatsby-plugin-purgecss: Ignored ', this.resourcePath);
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
      console.log('\nFrom: ', this.resourcePath);
      console.log('Removed Selectors: ', filtered);
    }
  }

  return css[0].css;
}
