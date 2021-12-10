
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'My Portfolio',
    author: 'Polina Gorbunova',
    avatar: './static/portfolio-avatar.png'
  },

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-image',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      name: `projects`,
      options: {
        path: `./data`
      }
    },
    `gatsby-plugin-material-ui`,
    `gatsby-theme-material-ui`,
    `gatsby-transformer-pdf`,
    `gatsby-transformer-sharp`,
  ],
}
