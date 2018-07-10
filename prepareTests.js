const symlinkDir = require('symlink-dir')
const fs = require('fs-extra')

try {
  fs.copySync('./empty.json', 'plugins/gatsby-plugin-purgecss/package.json')
  console.log('success!')
} catch (err) {
  console.error(err)
}

symlinkDir('node_modules', 'test_build/node_modules/')
  .then(result => {
    console.log(result)
  })
  .catch(err => console.error(err))

symlinkDir('plugins', 'test_build/plugins/')
  .then(result => {
    console.log(result)
  })
  .catch(err => console.error(err))