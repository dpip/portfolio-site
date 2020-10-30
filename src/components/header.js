import React, { useState } from "react"
import "../assets/scss/button.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Logo from "./logo.js"

import scrollTo from "gatsby-plugin-smoothscroll"
import Fade from "react-reveal/Fade"
import MobileNav from "./mobileNav.js"

import useDocumentScrollThrottled from "./../utilities/useDocumentScrollThrottled"

const Header = props => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowShadow, setShouldShowShadow] = useState(false)

  const MINIMUM_SCROLL = 80
  const TIMEOUT_DELAY = 400

  useDocumentScrollThrottled(callbackData => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShouldShowShadow(currentScrollTop > 1)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  const shadowStyle = shouldShowShadow ? "shadow" : ""
  const hiddenStyle = shouldHideHeader ? "hidden" : ""

  const navItems = ["about", "work", "experimental", "contact"]

  return (
    <header className={`header ${shadowStyle} ${hiddenStyle}`}>
      <div className={"inner"}>
        <AniLink className={"avatar"} paintDrip hex={"#f26419"} to="/">
          <Fade>
            <Logo />
          </Fade>
        </AniLink>
        <MobileNav type={props.type} nav={props.nav} />
        <Fade top cascade>
          <ul className="nav-items">
            {navItems.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    role={"presentation"}
                    rel={"noreferrer"}
                    onClick={() => scrollTo(`#${item}`)}
                  >
                    <span className={"green"}>0{index + 1}.</span>
                    {item}
                  </a>
                </li>
              )
            })}
          </ul>
        </Fade>
      </div>
    </header>
  )
}

export default Header
