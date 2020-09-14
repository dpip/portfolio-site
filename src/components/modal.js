import React from 'react'
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import '../assets/scss/modal.scss'

import Button from "../components/button.js";

const Modal = () => (
  <div id={'modal'}>
    <div className={'modal__content'}>
      <h1>Thanks for reaching out!</h1>
      <p>If you'd like to see what else I'm up to feel free to check out social links below or feel free to return home and check out some more projects I have worked on.</p>
      <div className={'modal__social'}>
        <a className={'social-item'} style={{paddingLeft: '0px'}}>Linkedin</a>
        <a className={'social-item'}>Github</a>
        <a className={'social-item'}>Codepen</a>
      </div>
      <AniLink className="btn" paintDrip hex={'#e6e6e6'} to="/">Return home</AniLink>
    </div>
  </div>
)

export default Modal
