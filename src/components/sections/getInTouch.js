import React from "react"
import "../../assets/scss/contact.scss"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import Fade from "react-reveal/Fade"

export default props => (
  <div id={"contact"} className={"container container--get-in-touch"}>
    <h2 className={"heading-section"} style={{ marginTop: "2rem" }}>
      <span className={"heading-section--number"}>04.</span>
      <span>Get in touch</span>
      <div className="rule"></div>
    </h2>
    <p>
      I'm currently looking for new opportunities and my inbox is always open!
      Whether you have a question or just want to say hi, I'll try my best to
      get back to you!
    </p>
    <AniLink
      className="btn btn-contact"
      paintDrip
      hex={"#f26419"}
      to="/contact"
    >
      Contact
    </AniLink>
  </div>
)
