import React, { useState } from "react"
import "../assets/scss/mobileNav.scss"

import scrollTo from "gatsby-plugin-smoothscroll"

import Fade from "react-reveal/Fade"

const navItems = ["about", "work", "experimental", "contact"]

const Logo = props => {
  const [menu, menuOpened] = useState(false)

  const openMenu = e => {
    e.preventDefault()
    menuOpened(true)
  }
  const closeMenu = e => {
    e.preventDefault()
    menuOpened(false)
  }
  const handleNav = (e, target) => {
    e.preventDefault()
    scrollTo(`#${target}`)
    setTimeout(() => {
      menuOpened(false)
    }, 250)
  }

  return (
    <div className="mobile-nav--wrap">
      <div
        className={"mobile-nav--selector"}
        onClick={e => {
          openMenu(e)
        }}
        onKeyDown={e => {
          openMenu(e)
        }}
        role="presentation"
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
              <div
                className={"nav-close--icon"}
                onClick={e => closeMenu(e)}
                onKeyDown={e => closeMenu(e)}
                role="presentation"
              >
                <svg
                  focusable="false"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 32 32"
                  ariaHidden="true"
                >
                  <path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z"></path>
                  <title>Close</title>
                </svg>
              </div>
            </div>
            <ul>
              {navItems.map((item, index) => {
                return (
                  <li
                    id={`mobile-nav-${item}`}
                    key={index}
                    onClick={e => handleNav(e, item)}
                    onKeyDown={e => handleNav(e, item)}
                    role="presentation"
                  >
                    <span>{`0${index + 1}.`}</span>
                    &nbsp;
                    {item}
                  </li>
                )
              })}
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
