import path from 'path';
import type { RuleSetUseItem, RuleSetRule } from 'webpack';

/**
 * Returns the index of regex matched loaders. null if not found
 */
const findLoader = (useArray: RuleSetUseItem[], loaderNamesRegex: RegExp) => {
  const index = useArray.findIndex((loaderObject) => {
    let loaderName = '';

    if (typeof loaderObject === 'string') {
      loaderName = loaderObject;
    } else if (
      'loader' in loaderObject &&
      typeof loaderObject.loader === 'string'
    ) {
      loaderName = loaderObject.loader;
    }

    return loaderNamesRegex.exec(loaderName) !== null;
  });

  return index === -1 ? undefined : index;
};

/**
 * Insert given loader at the specified index
 */
const insertLoader = (
  useArray: RuleSetUseItem[],
  index: number | undefined,
  loader: RuleSetRule
) => {
  if (index === undefined) {
    return;
  }
  useArray.splice(index, 0, loader);
};

/**
 * Return Relative Normalized path with forward slash
 */
const normalizePath = (resourcePath: string, rootContext: string) => {
  const relativePath = resourcePath.replace(path.normalize(rootContext), '');
  const normalizedPath = relativePath.split(path.sep).join('/');
  return normalizedPath;
};

const color = {
  Reset: '\u001B[0m',
  Bright: '\u001B[1m',
  Dim: '\u001B[2m',
  Underscore: '\u001B[4m',
  Blink: '\u001B[5m',
  Reverse: '\u001B[7m',
  Hidden: '\u001B[8m',

  FgBlack: '\u001B[30m',
  FgRed: '\u001B[31m',
  FgGreen: '\u001B[32m',
  FgYellow: '\u001B[33m',
  FgBlue: '\u001B[34m',
  FgMagenta: '\u001B[35m',
  FgCyan: '\u001B[36m',
  FgWhite: '\u001B[37m',

  BgBlack: '\u001B[40m',
  BgRed: '\u001B[41m',
  BgGreen: '\u001B[42m',
  BgYellow: '\u001B[43m',
  BgBlue: '\u001B[44m',
  BgMagenta: '\u001B[45m',
  BgCyan: '\u001B[46m',
  BgWhite: '\u001B[47m',
};

export { findLoader, insertLoader, color, normalizePath };
