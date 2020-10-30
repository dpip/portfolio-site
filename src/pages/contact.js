import React from "react"

import scrollTo from "gatsby-plugin-smoothscroll"

import "../assets/scss/main.scss"
import "../assets/scss/contact.scss"
import Layout from "../components/layout.js"
import SEO from "../components/seo/seo.js"
import Form from "../components/form.js"

const Contact = props => {
  setTimeout(() => {
    scrollTo("#contact-form")
  }, 250)
  return (
    <Layout type={"contact"}>
      <SEO title="Daniel Pipkin - contact" />
      <section id="contact-form">
        <div className={"container container--form"}>
          <h1 className={"hello green"}>Let's connect!</h1>
          <Form {...props} />
        </div>
      </section>
    </Layout>
  )
}
export default Contact
