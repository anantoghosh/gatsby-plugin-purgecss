module.exports = {
  plugins: [
    `gatsby-plugin-stylus`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printSummary: true,
        printRejected: true,
        printAll: true,
        develop: true,
        debug: true,
        ignore: ['/ignored.css', 'ignored/', 'pages2/style_ignore.css'],
        purgeOnly: ['pages/', 'pages2/'],
        purgeCSSOptions: {
          safelist: ['whitelist', /Regex$/],
        },
      },
    },
  ],
};
