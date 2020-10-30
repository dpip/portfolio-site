/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Site config here */
  siteMetadata: {
    title: `Daniel Pipkin`,
    description: `Portfolio created by Daniel Pipkin to showcase front-end development`,
    author: `Daniel Pipkin`,
    keywords: `daniel pipkin raleigh north carolina front end developer dev software engineer javascript react gatsby html css sass code`,
    siteUrl: `https://www.dpip.dev`,
  },
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-modal-routing`,
    `gatsby-plugin-fontawesome-css`,
  ],
}
