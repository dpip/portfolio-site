import React from "react"
import "../../assets/scss/about.scss"
import Avatar from "../../assets/images/dpip.jpeg"
import Fade from "react-reveal/Fade"

export default props => (
  <div id={"about"} className={"container container-about"}>
    <Fade bottom distance={"30px"}>
      <h2 className={"heading-section"} style={{ marginTop: "2rem" }}>
        <span className={"heading-section--number"}>01.</span>
        <span>{props.content.bodyTitle}</span>
        <div className="rule"></div>
      </h2>
    </Fade>
    <section className={"container about-wrapper"}>
      <Fade bottom cascade distance={"30px"}>
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
      </Fade>
      <Fade right distance={"30px"}>
        <div className={"about-image--container"}>
          <div className={"about-image"}>
            <a href={""} rel={"noreferrer"}>
              <img
                alt="screenshot of featured project"
                src={Avatar}
                description={"picture of daniel pipkin"}
              />
            </a>
          </div>
        </div>
      </Fade>
    </section>
  </div>
)
