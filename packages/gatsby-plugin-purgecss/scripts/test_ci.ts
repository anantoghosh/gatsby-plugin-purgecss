#!/usr/bin/env ts-node-script
import fs = require("fs-extra");
import sh = require("./sh");
import c = require("./commands");

/** Main */
(async () => {
  try {
    await sh(c.build, "Building");
    await sh(c.pack, "Packing");

    const files = fs.readdirSync(".", "utf8");
    const packageName = files.filter((file) => {
      return file.includes("gatsby-plugin-purgecss-");
    });
    process.chdir("test_build");
    await sh(c.installBuild, "Installing packages in test directory");
    await sh(c.listBuild, "Package versions installed");

    await sh(c.install(packageName[0]), `Installing ${packageName[0]}`);

    await sh(c.buildTestBuild, "Build gatsby in test directory");
    process.chdir("..");

    process.chdir("test_tailwind");
    await sh(c.installBuild, "Installing packages in test_tailwind directory");
    await sh(c.listBuild, "Package versions installed");

    await sh(c.install(packageName[0]), `Installing ${packageName[0]}`);

    await sh(c.buildTestBuild, "Build gatsby in test_tailwind directory");
    process.chdir("..");

    await sh(c.jestCoverage, "Testing with coverage report");
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
})();
