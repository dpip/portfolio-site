import React from "react"
import "../assets/scss/card.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { faCodepen } from "@fortawesome/free-brands-svg-icons"

const Card = props => {
  return (
    <a href={props.url} className={"card"}>
      <div className="card-content">
        <div className={"card-icon-container"}>
          <FontAwesomeIcon icon={faLightbulb} />
          <FontAwesomeIcon icon={faCodepen} />
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <ul>
        {props.tech.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </a>
  )
}
export default Card
