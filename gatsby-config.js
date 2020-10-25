/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `teal`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Fira Mono`,
          `Fira Sans`,
          `Fira Code`,
          `Roboto Mono`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
    },
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-modal-routing`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-fontawesome-css`,
  ],
}
