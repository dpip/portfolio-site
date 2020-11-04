import React from "react"
import "../assets/scss/404.scss"
import "../assets/scss/main.scss"

import Layout from "../components/layout.js"
import SEO from "../components/seo/seo.js"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Fade from "react-reveal/Fade"

export default props => (
  <Layout>
    <SEO title="Daniel Pipkin - 404" />
    <section>
      <Fade bottom duration={500} cascade delay={500}>
        <div className={"container container--404"}>
          <h1 className={"green heading-lg"}>
            <span role="img" aria-label="construction sign">
              🚧
            </span>
            &nbsp; 404 &nbsp;
            <span role="img" aria-label="construction sign">
              🚧
            </span>
          </h1>
          <br></br>
          <p className={"message-404"}>
            &nbsp; You're not lost! I, just, um... haven't created the page that{" "}
            <i className={"green"}>specific</i> page yet. &nbsp;
          </p>
          <AniLink
            className={"404-cta btn btn-green"}
            paintDrip
            hex={"#e6f1ff"}
            to="/"
          >
            C'mon back
          </AniLink>
        </div>
      </Fade>
    </section>
  </Layout>
)
