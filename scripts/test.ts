#!/usr/bin/env ts-node-script

import execa = require('execa');
import fs = require('fs-extra');
const stdio = 'inherit';

const pkgManager = process.env.CIRCLECI ? 'npm' : 'yarn';

/** Commands */
const build = 'npm run build';
const buildLocal = 'npm run build:local';
const pack = 'npm pack';
const installBuild = `${pkgManager} install`;
const listBuild = `${pkgManager} list --depth=0 gatsby less node-sass gatsby-plugin-sass gatsby-plugin-less gatsby-plugin-stylus`;
const installTailwind = `cd test_tailwind && ${pkgManager} install && cd ..`;
const listTailwind = `cd test_tailwind && ${pkgManager} list --depth=0 gatsby tailwindcss gatsby-plugin-postcss && cd ..`;
const buildTestBuild = 'npm run build';
const buildTestTailwindBuild = 'cd test_tailwind && npm run build && cd ..';
const jestCoverage = 'jest --ci --coverage';
const jestUnit = 'jest unit';
const jestE2E = 'jest build';
const jestTailwind = 'jest tailwind';
const install = (filename: string) => {
  if (pkgManager === 'npm')
    return `npm install ../${filename} --force`;
  return `yarn cache clean gatsby-plugin-purgecss && yarn add -D file:../${filename} --force`;
};
const installInTailwind = (filename: string) => {
  if (pkgManager === 'npm')
    return `cd test_tailwind && npm install ../${filename} && cd ..`;
  return `cd test_tailwind && yarn cache clean "gatsby-plugin-purgecss" && yarn add -D file:../${filename} && cd ..`;
};

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
    await sh(jestUnit, 'Unit Testing');
    await sh(build, 'Building');
    await sh(pack, 'Packing');

    const files = fs.readdirSync('.', 'utf8');
    const packageName = files.filter((file) => {
      return file.includes('gatsby-plugin-purgecss-');
    });
    process.chdir('test_build');
    await sh(installBuild, 'Installing packages in test directory');
    await sh(listBuild, 'Package versions installed');

    await sh(install(packageName[0]), `Installing ${packageName[0]}`);

    await sh(buildTestBuild, 'Build gatsby in test directory');
    process.chdir('..');
    await sh(jestE2E, 'Run E2E tests');
  } catch (error) {
    console.error(error);
  }
})();
