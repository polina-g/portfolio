
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'My Portfolio',
    author: 'Polina Gorbunova',
  },

  plugins: [
    'gatsby-plugin-sass',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./projects`
      }
    },
    `gatsby-plugin-material-ui`,
    `gatsby-theme-material-ui`,
  ],
}
