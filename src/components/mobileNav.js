import React, { useState, useEffect } from "react"
import "../assets/scss/mobileNav.scss"

import scrollTo from "gatsby-plugin-smoothscroll"

import Fade from "react-reveal/Fade"

const navItems = ["about", "work", "experimental", "contact"]

const Logo = props => {
  const [menu, menuOpened] = useState(false)

  const handleClick = e => {
    menuOpened(true)
  }

  return (
    <div className="mobile-nav--wrap">
      <div
        className={"mobile-nav--selector"}
        onClick={e => {
          handleClick(e)
        }}
      >
        <Fade>
          <div className={"bar bar-1"}></div>
          <div className={"bar bar-2"}></div>
          <div className={"bar bar-3"}></div>
        </Fade>
      </div>
      {menu === true ? (
        <Fade right duration={500}>
          <div className={"mobile-nav--tray"}>
            <div className={"nav-close"}>
              <div className={""}></div>
            </div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
        </Fade>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Logo
