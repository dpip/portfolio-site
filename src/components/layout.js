import React from "react"

import "../assets/scss/layout.scss"

import Header from "./header.js"
import Background from "./background.js"
import Gutter from "./gutter.js"
import Footer from "./footer.js"

export default props => (
  <>
    {console.log(props.type)}
    <Header type={props.type} />
    <main>{props.children}</main>
    <Background />
    <Gutter side={"left"} delay={1250} />
    <Gutter side={"right"} delay={1500} />
    <Footer />
  </>
)
