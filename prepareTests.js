const symlinkDir = require('symlink-dir')
const fs = require('fs-extra')

try {
  fs.copySync('./empty.json', 'plugins/gatsby-plugin-purgecss/package.json')
} catch (err) {
  console.error(err)
}

symlinkDir('node_modules', 'test_build/node_modules/')
  .then(result => {
  })
  .catch(err => console.error(err))

symlinkDir('plugins', 'test_build/plugins/')
  .then(result => {
  })
  .catch(err => console.error(err))