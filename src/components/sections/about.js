import React from "react"
import "../../assets/scss/about.scss"
import Avatar from "../../assets/images/dpip.jpeg"
export default props => (
  <div className={"container"}>
    <h2
      id={"about"}
      className={"heading-section"}
      style={{ marginTop: "2rem" }}
    >
      <span>{props.content.bodyTitle}</span>
      <div className="rule"></div>
    </h2>
    <section className={"container about-wrapper"}>
      <div className={"about-content"}>
        {props.content.body.map((c, i) => (
          <p key={i}>{c}</p>
        ))}
        <ul className={"about-tech__wrap"}>
          {props.content.tech.map((c, i) => (
            <li key={i} className={"about-tech__item"}>
              <span>&rArr;</span>&nbsp;{c}
            </li>
          ))}
        </ul>
      </div>
      <div className={"about-image--container"}>
        <div
          className={"about-image--img"}
          style={{ backgroundImage: `url(${Avatar})` }}
        ></div>
        <div className={"shade"}></div>
      </div>
    </section>
  </div>
)
