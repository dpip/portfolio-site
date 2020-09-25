import React from "react"
import "../assets/scss/button.scss"
import Avatar from "../assets/images/dpip.jpeg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default props => (
  <header>
    <div className={"inner"}>
      <AniLink className={"avatar"} paintDrip hex={"#e6e6e6"} to="/">
        <img width={"100"} height={"100"} src={Avatar} />
      </AniLink>
    </div>
  </header>
)
