import React from "react"
import "../assets/scss/card.scss"
import Button from "./button.js"

export default props => (
  <div className={"card"}>
    <img src={props.source} />
    <div className="card-content">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <Button text={props.cta} link={props.link} />
    </div>
  </div>
)
