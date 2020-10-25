import React from "react"
import "../assets/scss/built.scss"
import content from "../data/content.json"
export default props => (
  <>
    <h2 className={"heading-section"} style={{ marginTop: "2rem" }}>
      <span>{content.about.title}</span>
      <div className="rule"></div>
    </h2>
    <section className={"container about-wrapper"}>
      <div className={"about-content"}>
        {content.about.body.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
        <ul className={"about-tech__wrap"}>
          {content.about.tech.map((c, i) => (
            <li key={i} className={"about-tech__item"}>
              <span>&rArr;</span>&nbsp;{c}
            </li>
          ))}
        </ul>
      </div>
      <div className={"about-image"}>
        {/* <img width={"100"} height={"100"} src={Avatar} /> */}
      </div>
    </section>
  </>
)
