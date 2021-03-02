import { inspect } from 'util';
import fs from 'fs-extra';

export function writeConfig(config: unknown) {
  console.debug(
    '\ngatsby-plugin-purgecss: Writing config to gatsby-plugin-purgecss-debug-config.js'
  );

  try {
    fs.writeFileSync(
      'gatsby-plugin-purgecss-debug-config.js',
      inspect(config, { depth: 15 }),
      'utf8'
    );
    return 0;
  } catch (error: unknown) {
    console.log('\nCould not write file.');
    console.log(error);
    return -1;
  }
}

export function writeAppendError(errorMessage: unknown) {
  console.debug(
    'gatsby-plugin-purgecss: Writing errors to gatsby-plugin-purgecss-debug.js'
  );

  try {
    fs.appendFileSync(
      'gatsby-plugin-purgecss-debug.js',
      inspect(errorMessage),
      'utf8'
    );
    return 0;
  } catch (error: unknown) {
    console.log('\nCould not write file.');
    console.log(error);
    return -1;
  }
}
