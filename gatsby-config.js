module.exports = {
  mapping: {},
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-glamor',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
