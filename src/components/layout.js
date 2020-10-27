import React from "react"

import "../assets/scss/layout.scss"

import Header from "./header.js"
import Background from "./background.js"
import Gutter from "./gutter.js"
import Footer from "./footer.js"

let mode = "dark"

const toggleMode = e => {
  e.preventDefault()
  if (mode === "dark") {
    mode = "light"
    console.log(mode)
  } else {
    mode = "dark"
    console.log(mode)
  }
}

export default ({ children, props }) => (
  <>
    <Header toggle={toggleMode} {...props} />
    <main>{children}</main>
    <Background {...props} />
    <Gutter side={"left"} delay={1250} />
    <Gutter side={"right"} delay={1500} />
    <Footer {...props} />
  </>
)
