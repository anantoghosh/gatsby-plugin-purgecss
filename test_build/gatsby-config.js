module.exports = {
  plugins: [
    `gatsby-plugin-stylus`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-less`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        whitelist: ['html', 'body', 'whitelist'],
        whitelistPatterns: [/Regex$/]
      }
    }
  ]
};
