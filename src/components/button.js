import React from "react"
import "../assets/scss/button.scss"
export default props => (
  <a href={props.link} target={"_blank"} rel={"noreferrer"}>
    {props.text}
  </a>
)
