
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
      name: `projects`,
      options: {
        path: `./projects`
      }
    },
    `gatsby-plugin-material-ui`,
    `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resume`,
        path: `${__dirname}/resume`,
      },
    },
    `gatsby-transformer-pdf`,
  ],
}
