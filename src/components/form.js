import React from "react"
import "../assets/scss/contact.scss"
import {navigate} from 'gatsby'; //import navigate from gatsby
import ModalExamplePage from "../components/notification.js";



export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/meqryvqd"
        method="POST"
      >
        <br />
        <div className="form__name-email">
          <div className="name-email-item">
          <label>Your Email</label>
          <input id={'email'} type="email" name="email" placeholder="Your email..."/>
        </div>
        <div className="name-email-item">
          <label>Your Name</label>
          <input id={'name'} type="name" name="name" placeholder="Your name..."/>
        </div>
        </div>
        <br />
        <label>Message</label>
        <textarea id={'message'} type="text" name="message" placeholder="Hey Daniel..." cols="30" rows="10"/>
        {status === "SUCCESS" ? <ModalExamplePage /> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
