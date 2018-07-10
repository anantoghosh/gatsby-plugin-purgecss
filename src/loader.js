// modified from https://github.com/americanexpress/purgecss-loader

const PurgeCss = require('purgecss')
const { getOptions } = require('loader-utils')

module.exports = function loader(source) {
  console.log("\nPURGE\n")
  const options = getOptions(this)

  const css = new PurgeCss({
    css: [{ raw: source }],
    ...options,
  }).purge()

  if (options.rejected) {
    const rejected = css[0].rejected

    if (rejected && rejected.length) {
      const filtered = rejected.map((val) => {
        return val.replace('\n', '')
      })
      console.log('\nRemoved Selectors: ', filtered)

    }
  }

  return css[0].css
}
