import React from "react"
import "../assets/scss/card.scss"
import Button from "./button.js"

export default (props) =>

<div className={'card'}>
  <img src={props.source} />
  <h3>{props.title}</h3>
  <p>{props.description}</p>
  <Button text={props.cta}/>
</div>
