import React, { useState, useEffect } from "react"
import "../assets/scss/logo.scss"

const Logo = props => {
  return (
    <div className={"logo"}>
      <div className="logo--d">
        <div className="logo--d-l"></div>
        <div className="logo--d-c"></div>
        <div className="logo--d-r"></div>
      </div>
      <div className="logo--p">
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Logo
