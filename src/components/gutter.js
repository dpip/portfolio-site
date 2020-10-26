import React, { useState } from "react"
import "../assets/scss/gutter.scss"

import content from "../data/content.json"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCodepen,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { faCopy } from "@fortawesome/free-solid-svg-icons"

import Fade from "react-reveal/Fade"

const Gutter = props => {
  const [email, emailCopied] = useState(false)

  const copyEmail = e => {
    e.preventDefault()
    navigator.clipboard.writeText("dpip.nc@gmail.com")
    emailCopied(true)
    setTimeout(() => {
      emailCopied(false)
    }, 2000)
    return
  }

  return (
    <div className={`gutter gutter-${props.side}`}>
      {props.side === "left" ? (
        <ul>
          <li>
            <a href={content.social.codepen} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </li>
          <li>
            <a href={content.social.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a href={content.social.linkedin} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li>
            <a href={content.social.instagram} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      ) : (
        <div className={"gutter--email"} onClick={e => copyEmail(e)}>
          {email === true ? (
            <Fade bottom duration={500} distance={"16px"}>
              <div className={"copied"}>{content.notifications.email}</div>
            </Fade>
          ) : (
            false
          )}
          <a href="" rel="noreferrer">
            <FontAwesomeIcon icon={faCopy} />
            &nbsp; &nbsp;dpip.nc@gmail.com
          </a>
        </div>
      )}
      <div className={"gutter--tail"} />
    </div>
  )
}

export default Gutter
