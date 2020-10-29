import React from "react"
import "../assets/scss/main.scss"
import "../assets/scss/contact.scss"
import Layout from "../components/layout.js"
import Form from "../components/form.js"

export default props => (
  <Layout type={"contact"}>
    <section>
      <div className={"container container--form"}>
        <h1 className={"hello green"}>Let's connect!</h1>
        <Form {...props} />
      </div>
    </section>
  </Layout>
)
