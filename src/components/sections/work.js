import React from "react"
import "../../assets/scss/work.scss"

import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import prodOne from "../../assets/images/sterling.png"
import prodTwo from "../../assets/images/ping.png"
import prodThree from "../../assets/images/anniversary.png"

const projectSRC = [prodOne, prodTwo, prodThree]

export default props => (
  <div className={"container container-work"}>
    <Fade bottom cascade distance={"30px"} delay={250}>
      <h2
        id={"work"}
        className={"heading-section"}
        style={{ marginTop: "2rem" }}
      >
        <span>{props.content.bodyTitle}</span>
        <div className="rule"></div>
      </h2>
      {props.content.projects.map((project, index) => (
        <div className={`work--item item-${index}`} key={index}>
          <h2 className={"green featured-mobile"}>Featured Project</h2>
          <div className={"project-image"}>
            <a href={project.link} target={"_blank"} rel={"noreferrer"}>
              <img src={projectSRC[index]} description={""} />
            </a>
          </div>

          <div className={"project-content"}>
            <span className={"green project-featured"}>Featured Project</span>
            <h4>{project.title}</h4>
            <div className={"project-description"}>{project.description}</div>
            <div className={"project-tech"}>
              {project.tech.map((t, index) => {
                return <p key={index}>{t}</p>
              })}
            </div>
            <div className={"project-ctas"}>
              {!project.github ? (
                ""
              ) : (
                <a
                  className={"project-github"}
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              )}
              <a
                className={"project-link"}
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </Fade>
  </div>
)
