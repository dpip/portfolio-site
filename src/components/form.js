import React from "react"

import "../assets/scss/contact.scss"
import Modal from "../components/modal.js"
import content from "../data/content.json"

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
      open: false,
    }
  }

  render() {
    const { status } = this.state
    const sm = content.form.success
    const em = content.form.error

    const resetModal = () => {
      this.setState({
        status: "",
        open: false,
      })
    }

    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/meqryvqd"
        method="POST"
      >
        <br />
        <div className="form__name-email">
          <div className="name-email-item">
            <label htmlFor="email">Your Email</label>
            <input
              id={"email"}
              type="email"
              name="email"
              placeholder="Your email..."
            />
          </div>
          <div className="name-email-item">
            <label htmlFor="name">Your Name</label>
            <input
              id={"name"}
              type="name"
              name="name"
              placeholder="Your name..."
            />
          </div>
        </div>
        <br />
        <label htmlFor="message">Message</label>
        <textarea
          id={"message"}
          type="text"
          name="message"
          placeholder="Hey Pip..."
          cols="30"
          rows="10"
        />
        {status === "SUCCESS" ? (
          <Modal
            type={"success"}
            header={sm.header}
            message={sm.message}
            btnText={"return"}
            to={sm.to}
            open={this.state.open}
            resetModal={resetModal}
            social={content.social}
          />
        ) : (
          <button>Submit</button>
        )}
        {status === "ERROR" && (
          <Modal
            type={"error"}
            header={em.header}
            message={em.message}
            btnText={"gotcha"}
            to={em.to}
            open={this.state.open}
            resetModal={resetModal}
            social={content.social}
          />
        )}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS", open: true })
      } else {
        this.setState({ status: "ERROR", open: true })
      }
    }
    xhr.send(data)
  }
}
