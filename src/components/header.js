import React from "react"
import "../assets/scss/button.scss"
import Avatar from "../assets/images/dpip.jpeg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Mode from "./mode.js"
import Logo from "./logo.js"

export default props => (
  <header>
    <div className={"inner"}>
      <AniLink className={"avatar"} paintDrip hex={"#e6e6e6"} to="/">
        <Logo />
      </AniLink>
      <Mode {...props} />
    </div>
  </header>
)
