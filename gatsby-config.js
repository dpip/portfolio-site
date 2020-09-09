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
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["VarelaRound"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
      `gatsby-plugin-sass`,
      `gatsby-plugin-transition-link`
  ]
}
