import React from "react"
import "../assets/scss/404.scss"
import "../assets/scss/main.scss"

import Layout from "../components/layout.js"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Fade from "react-reveal/Fade"

export default props => (
  <Layout>
    <section>
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
          &nbsp; You're not lost! I, just um... haven't created the page you're
          looking for quite yet? &nbsp;
        </p>
        <AniLink
          className={"404-cta btn btn-green"}
          paintDrip
          hex={"#e6e6e6"}
          to="/"
        >
          Cmon' back
        </AniLink>
      </div>
    </section>
  </Layout>
)
