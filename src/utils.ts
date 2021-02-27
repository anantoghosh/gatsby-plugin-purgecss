import path from 'path';
import type { RuleSetUseItem, RuleSetLoader } from 'webpack';

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

    return loaderName.match(loaderNamesRegex) !== null;
  });

  return index === -1 ? null : index;
};

/**
 * Insert given loader at the specified index
 */
const insertLoader = (
  useArray: RuleSetUseItem[],
  index: number | null,
  loader: RuleSetLoader
) => {
  if (index === null) {
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
  Reset: '\x1b[0m',
  Bright: '\x1b[1m',
  Dim: '\x1b[2m',
  Underscore: '\x1b[4m',
  Blink: '\x1b[5m',
  Reverse: '\x1b[7m',
  Hidden: '\x1b[8m',

  FgBlack: '\x1b[30m',
  FgRed: '\x1b[31m',
  FgGreen: '\x1b[32m',
  FgYellow: '\x1b[33m',
  FgBlue: '\x1b[34m',
  FgMagenta: '\x1b[35m',
  FgCyan: '\x1b[36m',
  FgWhite: '\x1b[37m',

  BgBlack: '\x1b[40m',
  BgRed: '\x1b[41m',
  BgGreen: '\x1b[42m',
  BgYellow: '\x1b[43m',
  BgBlue: '\x1b[44m',
  BgMagenta: '\x1b[45m',
  BgCyan: '\x1b[46m',
  BgWhite: '\x1b[47m',
};

export { findLoader, insertLoader, color, normalizePath };
