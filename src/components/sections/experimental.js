import React from "react"
import "../../assets/scss/experimental.scss"

export default props => (
  <div id={"experimental"} className={"container"}>
    <h2 className={"heading-section"} style={{ marginTop: "2rem" }}>
      <span>{props.content.bodyTitle}</span>
      <div className="rule"></div>
    </h2>
    <section className={"container experimental-wrapper"}></section>
  </div>
)
