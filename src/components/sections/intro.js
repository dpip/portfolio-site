import React from "react"
import "../../assets/scss/intro.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Fade from "react-reveal/Fade"

export default props => (
  <Fade cascade bottom distance={"30px"} delay={500} duration={750}>
    <div className={"container container--intro"}>
      <p className={"hello green"}>{props.content.hello}</p>
      <h2 className={"heading-lg"}>{props.content.name}</h2>
      <h2 className={"heading-lg slate"} style={{ margin: "6px 0 6px 0" }}>
        {props.content.profession}
      </h2>
      <p className={"supporting-content slate"}>{props.content.main}</p>
      <AniLink
        className="btn btn-contact"
        paintDrip
        style={{ marginTop: "50px" }}
        hex={"#f26419"}
        to="/contact/"
      >
        Get in touch
      </AniLink>
    </div>
  </Fade>
)
