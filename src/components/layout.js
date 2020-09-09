import React from "react"
import "../assets/scss/header.scss"
import "../assets/scss/layout.scss"
import Header from "./header.js"
import Footer from "./footer.js"
export default ({ children }) =>

<>
  <Header />
  {children}
  <Footer />
</>
