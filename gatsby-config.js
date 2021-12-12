
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
    'gatsby-plugin-mdx',
    `gatsby-transformer-json`,
    `gatsby-transformer-pdf`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      name: `data`,
      options: {
        path: `./data`
      }
    },
    `gatsby-plugin-material-ui`,
    `gatsby-theme-material-ui`,
  ],
}
