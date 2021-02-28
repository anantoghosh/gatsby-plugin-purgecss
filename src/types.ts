import type { defaultOptions, PurgeCSS } from 'purgecss';

// export type PurgeCSSOptions = typeof defaultOptions;
export type PurgeCSSOptions = Parameters<PurgeCSS['purge']>[0];

export interface Options {
  ignore?: string[];
  purgeOnly?: string[];
  tailwind?: boolean;
  printSummary?: boolean;
  printRejected?: boolean;
  printAll?: boolean;
  debug?: boolean;
  develop?: boolean;
  purgeCSSOptions?: Exclude<PurgeCSSOptions, string>;
}
