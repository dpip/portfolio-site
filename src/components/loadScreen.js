import React from "react"
import "../assets/scss/loadScreen.scss"

import Logo from "./Logo.js"

const LoadScreen = props => {
  return (
    <div className={"load-screen"}>
      <Logo />
    </div>
  )
}
export default LoadScreen
