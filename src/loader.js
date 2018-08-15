// modified from https://github.com/americanexpress/purgecss-loader

/**
 * @typedef {import('loader-utils').OptionObject} OptionObject
 */

import PurgeCss from 'purgecss';
import { getOptions } from 'loader-utils';
import { stats, Debug } from './shared';

export default function loader(source) {
  // prettier-ignore
  const options =
  /** @type {OptionObject & {content:string[], rejected?:boolean}} */
  (getOptions(this));

  let css;
  try {
    css = new PurgeCss({
      css: [{ raw: source, extension: 'css' }],
      ...options
    }).purge();
  } catch (error) {
    console.log(
      '\ngatsby-plugin-purgecss: Could not parse file, skipping. Your build will not break.'
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
    stats.addSize(source);
    stats.addRemovedSize(css[0].css);

    if (options.printRejected && Array.isArray(rejected)) {
      const filtered = rejected.map(val => {
        return val.replace('\n', '');
      });
      console.log('\nRemoved Selectors: ', filtered);
    }
  }

  return css[0].css;
}
