const { run } = require('runjs');
const fs = require('fs-extra');
const symlinkDir = require('symlink-dir');

const pkgManager = process.env.CIRCLECI ? 'npm' : 'yarn';

const c = {
  build: 'babel src --out-dir .',
  buildTest: 'babel src --out-dir plugins/gatsby-plugin-purgecss',
  pack: 'npm pack',
  installBuild: `cd test_build && ${pkgManager} install && cd ..`,
  listBuild: `cd test_build && ${pkgManager} list --depth=0 gatsby less node-sass gatsby-plugin-sass gatsby-plugin-less gatsby-plugin-stylus && cd ..`,
  installTailwind: `cd test_tailwind && ${pkgManager} install && cd ..`,
  listTailwind: `cd test_tailwind && ${pkgManager} list --depth=0 gatsby tailwindcss gatsby-plugin-postcss && cd ..`,
  buildTestBuild: 'cd test_build && npm run build && cd ..',
  buildTestTailwindBuild: 'cd test_tailwind && npm run build && cd ..',
  jestCoverage: 'jest --ci --coverage',
  jestUnit: 'jest unit',
  jestE2E: 'jest build',
  jestTailwind: 'jest tailwind',
  install(filename) {
    if (pkgManager === 'npm')
      return `cd test_build && npm install ../${filename} && cd ..`;
    return `cd test_build && yarn cache clean "gatsby-plugin-purgecss" && yarn add -D file:../${filename} && cd ..`;
  },
  installInTailwind(filename) {
    if (pkgManager === 'npm')
      return `cd test_tailwind && npm install ../${filename} && cd ..`;
    return `cd test_tailwind && yarn cache clean "gatsby-plugin-purgecss" && yarn add -D file:../${filename} && cd ..`;
  }
};

function test_ci() {
  console.log('\nBuilding');
  run(c.build);

  console.log('\nCreating npm package');
  run(c.pack);

  console.log('\nInstalling test_build packages');
  run(c.installBuild);
  run(c.listBuild);

  console.log('\nInstalling gatsby-plugin-purgecss package');
  let files = fs.readdirSync('.', 'utf8');
  files = files.filter(file => {
    return file.includes('gatsby-plugin-purgecss');
  });
  run(c.install(files[0]));

  console.log('\nRunning gatsby build in test_build');
  run(c.buildTestBuild);

  console.log('\nInstalling test_build packages');
  run(c.installTailwind);
  run(c.listTailwind);

  console.log('\nInstalling gatsby-plugin-purgecss package');
  run(c.installInTailwind(files[0]));

  console.log('\nRunning gatsby build in test_tailwind');
  run(c.buildTestTailwindBuild);

  console.log('\nRunning tests with coverage');
  run(c.jestCoverage);
}

function testbuild() {
  console.log('\nRunning unit tests');
  run(c.jestUnit);

  console.log('\nBuilding to plugins folder');
  run(c.buildTest);

  console.log('\nMaking an empty package.json for plugin');
  try {
    fs.copySync('./empty.json', 'plugins/gatsby-plugin-purgecss/package.json');
    console.log('\nSuccess');
  } catch (err) {
    console.error(err);
  }

  console.log('\nLinking node_modules and plugins folder to test_build');
  symlinkDir('node_modules', 'test_build/node_modules/')
    .then(result => symlinkDir('plugins', 'test_build/plugins/'))
    .then(result => {
      console.log('\nSuccess');

      console.log('\nRunning gatsby build in test_build');
      run(c.buildTestBuild);

      console.log('\nRunning e2e tests');
      run(c.jestE2E);
    })
    .catch(err => console.error(err));
}

function test() {
  console.log('\nRunning unit tests');
  run(c.jestUnit);

  console.log('\nBuilding to plugins folder');
  run(c.buildTest);

  console.log('\nMaking an empty package.json for plugin');
  try {
    fs.copySync('./empty.json', 'plugins/gatsby-plugin-purgecss/package.json');
    console.log('\nSuccess');
  } catch (err) {
    console.error(err);
  }

  console.log('\nLinking node_modules and plugins folder to test_build');
  symlinkDir('node_modules', 'test_build/node_modules/')
    .then(result => symlinkDir('plugins', 'test_build/plugins/'))
    .then(result => {
      console.log('\nSuccess');

      console.log('\nRunning gatsby build in test_build');
      run(c.buildTestBuild);

      console.log('\nRunning e2e tests');
      run(c.jestE2E);
    })
    .then(() => {
      console.log('\nLinking node_modules and plugins folder to testtailwind');
      return symlinkDir('node_modules', 'test_tailwind/node_modules/');
    })
    .then(result => symlinkDir('plugins', 'test_tailwind/plugins/'))
    .then(result => {
      console.log('\nSuccess');

      console.log('\nRunning gatsby build in test_tailwind');
      run(c.buildTestTailwindBuild);

      console.log('\nRunning e2e tests');
      run(c.jestTailwind);
    })
    .catch(err => console.error(err));
}

function testtailwind() {
  console.log('\nRunning unit tests');
  run(c.jestUnit);

  console.log('\nBuilding to plugins folder');
  run(c.buildTest);

  console.log('\nMaking an empty package.json for plugin');
  try {
    fs.copySync('./empty.json', 'plugins/gatsby-plugin-purgecss/package.json');
    console.log('\nSuccess');
  } catch (err) {
    console.error(err);
  }

  console.log('\nLinking node_modules and plugins folder to test_tailwind');
  symlinkDir('node_modules', 'test_tailwind/node_modules/')
    .then(result => symlinkDir('plugins', 'test_tailwind/plugins/'))
    .then(result => {
      console.log('\nSuccess');

      console.log('\nRunning gatsby build in test_tailwind');
      run(c.buildTestTailwindBuild);

      console.log('\nRunning e2e tests');
      run(c.jestTailwind);
    })
    .catch(err => console.error(err));
}

function teste2e() {
  console.log('\nBuilding to plugins folder');
  run(c.buildTest);

  console.log('\nRunning gatsby build in test_build');
  run(c.buildTestBuild);

  console.log('\nRunning e2e tests');
  run(c.jestE2E);
}

function testdevelop() {
  console.log('\nBuilding to plugins folder');
  run(c.buildTest);

  console.log('\nRunning gatsby build in test_build');
  run(c.buildTestBuild);
}

module.exports = {
  test_ci,
  teste2e,
  testbuild,
  testtailwind,
  testdevelop,
  test
};
