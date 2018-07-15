/**
 * @typedef {import('webpack').RuleSetUseItem} RuleSetUseItem
 * @typedef {import('webpack').RuleSetLoader} RuleSetLoader
 */

/**
 * Returns the index of regex matched loaders. null if not found
 * @param {RuleSetUseItem[]} useArray
 * @param {RegExp} loaderNamesRegex
 * @returns {number|null} number | null
 */
const findLoader = (useArray, loaderNamesRegex) => {
  const index = useArray.findIndex(loaderObject => {
    let loaderName = '';

    if (typeof loaderObject === 'string') {
      loaderName = loaderObject;
    } else if ('loader' in loaderObject) {
      loaderName = loaderObject.loader;
    }

    return loaderName.match(loaderNamesRegex) !== null;
  });

  return index === -1 ? null : index;
};

/**
 * Insert given loader at the specified index
 * @param {RuleSetUseItem[]} useArray
 * @param {null|number} index
 * @param {RuleSetLoader} loader
 */
const insertLoader = (useArray, index, loader) => {
  if (index === null) {
    return;
  }
  useArray.splice(index, 0, loader);
};

export { findLoader, insertLoader };
