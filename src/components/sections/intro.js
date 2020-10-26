import React from "react"
import "../../assets/scss/intro.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Tools from "../tools.js"

export default props => (
  <>
    <p className={"hello green"}>{props.content.hello}</p>
    <h2 className={"heading-lg"}>{props.content.name}</h2>
    <h2 className={"heading-lg slate"} style={{ margin: "6px 0 6px 0" }}>
      {props.content.profession}
    </h2>
    <Tools />
    <p className={"supporting-content slate"}>{props.content.main}</p>
    {/* <p>{props.content.supporting}</p> */}
    <AniLink
      className="btn btn-contact"
      paintDrip
      hex={"#e6e6e6"}
      to="/contact/"
    >
      Get in touch
    </AniLink>
  </>
)
