#!/usr/bin/env ts-node-script

import execa = require('execa');
import fs = require('fs-extra');
import c = require('./commands');
const stdio = 'inherit';

/**  Outputs to stdio */
function sh(command: string, title?: string) {
  if (title) console.log(`🚀 ${title}`);
  return execa.command(command, {
    stdio,
  });
}

/** Main */
(async () => {
  try {
    await sh(c.jestUnit, 'Unit Testing');
    await sh(c.buildLocal, 'Building');

    console.log('\nMaking an empty package.json for plugin');
    fs.copySync('./empty.json', 'plugins/gatsby-plugin-purgecss/package.json');
    fs.copySync('plugins/', 'test_build/plugins/');

    process.chdir('test_build');
    await sh(c.buildTestBuild, 'Build gatsby in test directory');
    process.chdir('..');
    await sh(c.jestE2E, 'Run E2E tests');
  } catch (error) {
    console.error(error);
  }
})();
