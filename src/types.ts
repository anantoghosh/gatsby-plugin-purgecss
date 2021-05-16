import type { PurgeCSS } from 'purgecss';

// export type PurgeCSSOptions = typeof defaultOptions;
export type PurgeCSSOptions = Parameters<PurgeCSS['purge']>[0];

export interface MergedOptions {
  ignore: string[];
  purgeOnly: string[];
  tailwind: boolean;
  printSummary: boolean;
  printRejected: boolean;
  printAll: boolean;
  debug: boolean;
  develop: boolean;
  purgeCSSOptions: Exclude<PurgeCSSOptions, string | undefined>;
}

export type Options = Partial<MergedOptions>;
