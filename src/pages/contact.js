import React from "react"
import "../assets/scss/main.scss"
import "../assets/scss/contact.scss"
import Layout from "../components/layout.js";
import Form from "../components/form.js";

export default (props) =>

  <Layout>
    <section>
      <div className={'container'}>
        <h1 className={'red'}>Let's get in touch!</h1>
        <p><strong>Interested in working together?</strong> Fill out the form below and we can get started on creating something amazing together!</p>
        <Form />
      </div>
    </section>
  </Layout>
