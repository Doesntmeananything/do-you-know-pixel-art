module.exports = {
  siteMetadata: {
    title: `Do You Know Pixel Art?`,
    description: `Take a look at the history and evolution of Pixel Art as it pertains to videogames.`,
    siteUrl: `https://www.gatsbyjs.org`,
    author: `github.com/Doesntmeananything`,
    image: "public/static/Do You Know Pixel Art.png",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Do You Know Pixel Art?`,
        short_name: `Pixel Art`,
        start_url: `/`,
        background_color: `#f06292`,
        theme_color: `#f06292`,
        display: `minimal-ui`,
        icon: `src/images/pixel-icon-large-less-gradient.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
