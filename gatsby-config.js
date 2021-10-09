module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'AmbasadaV8'
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        url: 'http://ambasadav8.adamchrapek.pl/graphql'
      }
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',

      options: {
        name: `gatsby-headless-wp-starter`,
        short_name: `GatsbyWP`,
        start_url: `/`,
        background_color: `#30BA78`,
        theme_color: `#30BA78`,
        display: `minimal-ui`,
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    }
  ]
}
