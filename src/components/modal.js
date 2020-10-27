import React, { useState } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import "../assets/scss/modal.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCodepen,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import Fade from "react-reveal/Fade"

const Modal = props => {
  const [modal, modalOpen] = useState(props.open)

  const closeModal = e => {
    e.preventDefault()
    props.resetModal()
    return
  }

  return (
    <>
      {modal === true ? (
        <div id={"modal"}>
          <Fade bottom cascade duration={500} distance={"24px"}>
            <div className={"modal__content"}>
              <h1>{props.header}</h1>
              <p className={"modal__content-message"}>{props.message}</p>
              <div className={"modal__social"}>
                <a className={"social-item"} style={{ paddingLeft: "0px" }}>
                  <FontAwesomeIcon icon={faCodepen} />
                </a>
                <a className={"social-item"}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className={"social-item"}>
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a className={"social-item"}>
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <div className={"rule-custom"} />
              </div>
              {props.type === "success" ? (
                <AniLink
                  className="btn"
                  paintDrip
                  hex={"#e6e6e6"}
                  to={props.to}
                >
                  {props.btnText}
                </AniLink>
              ) : (
                <div className={"btn green"} onClick={e => closeModal(e)}>
                  {props.btnText}
                </div>
              )}
            </div>
          </Fade>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default Modal
