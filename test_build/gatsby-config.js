module.exports = {
  plugins: [
    `gatsby-plugin-stylus`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass')
      }
    },
    `gatsby-plugin-less`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        develop: true,
        debug: true,
        whitelist: ['whitelist'],
        whitelistPatterns: [/Regex$/],
        ignore: ['/ignored.css', 'ignored/', 'pages2/style_ignore.css'],
        purgeOnly: ['pages/', 'pages2/']
      }
    }
  ]
};
