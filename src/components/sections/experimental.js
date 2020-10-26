import React from "react"
import "../../assets/scss/experimental.scss"

export default props => (
  <>
    <h2
      id={"experiments"}
      className={"heading-section"}
      style={{ marginTop: "2rem" }}
    >
      <span>{props.content.bodyTitle}</span>
      <div className="rule"></div>
    </h2>
    <section className={"container experimental-wrapper"}></section>
  </>
)
