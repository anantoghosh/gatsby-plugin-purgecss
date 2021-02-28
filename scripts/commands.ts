const pkgManager = process.env.CIRCLECI ? 'npm' : 'yarn';

export = {
  build: 'npm run build',
  buildLocal: 'npm run build:local',
  pack: 'npm pack',
  installBuild: `${pkgManager} install`,
  listBuild: `${pkgManager} list --depth:0 gatsby less node-sass gatsby-plugin-sass gatsby-plugin-less gatsby-plugin-stylus`,
  installTailwind: `cd test_tailwind && ${pkgManager} install && cd ..`,
  listTailwind: `cd test_tailwind && ${pkgManager} list --depth:0 gatsby tailwindcss gatsby-plugin-postcss && cd ..`,
  buildTestBuild: 'npm run build',
  buildTestTailwindBuild: 'cd test_tailwind && npm run build && cd ..',
  jestCoverage: 'jest --ci --coverage',
  jestUnit: 'jest unit',
  jestE2E: 'jest build',
  jestTailwind: 'jest tailwind',
  install: (filename: string) => {
    if (pkgManager === 'npm') return `npm install ../${filename} --force`;
    return `yarn cache clean gatsby-plugin-purgecss && yarn add -D file:../${filename} --force`;
  },
  installInTailwind: (filename: string) => {
    if (pkgManager === 'npm')
      return `cd test_tailwind && npm install ../${filename} && cd ..`;
    return `cd test_tailwind && yarn cache clean "gatsby-plugin-purgecss" && yarn add -D file:../${filename} && cd ..`;
  },
};
