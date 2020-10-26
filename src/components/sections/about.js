import React from "react"
import "../../assets/scss/about.scss"
import Avatar from "../../assets/images/dpip.jpeg"
import Fade from "react-reveal/Fade"

export default props => (
  <div className={"container container-about"}>
    <Fade bottom distance={"30px"}>
      <h2
        id={"about"}
        className={"heading-section"}
        style={{ marginTop: "2rem" }}
      >
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
          <div
            className={"about-image--img"}
            style={{ backgroundImage: `url(${Avatar})` }}
          ></div>
          <div className={"shade"}></div>
        </div>
      </Fade>
    </section>
  </div>
)
