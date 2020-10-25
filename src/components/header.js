import React, { useState } from "react"
import "../assets/scss/button.scss"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Logo from "./logo.js"

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

  return (
    <header className={`header ${shadowStyle} ${hiddenStyle}`}>
      <div className={"inner"}>
        <AniLink className={"avatar"} paintDrip hex={"#e6e6e6"} to="/">
          <Logo />
        </AniLink>
        <ul className="nav-items">
          <li>About</li>
          <li>Work</li>
          <li>Experiments</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
