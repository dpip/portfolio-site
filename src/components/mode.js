import React from "react"
import "../assets/scss/mode.scss"

export default props => (
  <div id={props.mode} className={"mode"} onClick={props.toggle} />
)
