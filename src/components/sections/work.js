import React from "react"
import "../../assets/scss/work.scss"

export default props => (
  <>
    <h2 id={"work"} className={"heading-section"} style={{ marginTop: "2rem" }}>
      <span>{props.content.bodyTitle}</span>
      <div className="rule"></div>
    </h2>
    <section className={"container work-wrapper"}></section>
  </>
)
