const pkgManager = process.env.CIRCLECI ? "npm" : "yarn";

export = {
  build: "npm run build",
  buildLocal: "npm run build:local",
  pack: "npm pack",
  installBuild: `${pkgManager} install`,
  listBuild: `${pkgManager} list --depth 0 gatsby less sass gatsby-plugin-sass gatsby-plugin-less gatsby-plugin-stylus`,
  buildTestBuild: "npm run build",
  jestCoverage: "npm run jest:coverage",
  jestUnit: "jest unit",
  jestE2E: "jest build",
  jestTailwind: "jest tailwind",
  install: (filename: string) => {
    if (pkgManager === "npm") return `npm install ../${filename} --force`;
    return `yarn add -D file:../${filename} --force`;
  },
};
