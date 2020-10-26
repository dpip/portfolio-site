import React from "react"
import "../../assets/scss/contact.scss"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import Fade from "react-reveal/Fade"

export default props => (
  <Fade bottom cascade distance={"20px"}>
    <div className={"container container--get-in-touch"}>
      <h1>Get in touch</h1>
      <p>
        I'm currently looking for new opportunities and my inbox is always open!
        Whether you have a question or just want to say hi, I'll try my best to
        get back to you!
      </p>
      <AniLink
        className="btn btn-contact"
        paintDrip
        hex={"#e6e6e6"}
        to="/contact"
      >
        Contact
      </AniLink>
    </div>
  </Fade>
)
