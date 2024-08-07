import React from "react"
import "../../assets/scss/work.scss"

import Fade from "react-reveal/Fade"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import prodOne from "../../assets/images/many-faces.png"
import prodTwo from "../../assets/images/cloaked.png"
import prodThree from "../../assets/images/greenchair.png"
import prodFour from "../../assets/images/ping.png"

const projectSRC = [prodOne, prodTwo, prodThree, prodFour]

export default props => (
  <div id={"work"} className={"container container-work"}>
    <Fade bottom cascade distance={"30px"} delay={250}>
      <h2 className={"heading-section"} style={{ marginTop: "2rem" }}>
        <span className={"heading-section--number"}>02.</span>
        <span>{props.content.bodyTitle}</span>
        <div className="rule"></div>
      </h2>
      {props.content.projects.map((project, index) => (
        <div className={`work--item item-${index}`} key={index}>
          <h2 className={"green featured-mobile"}>{project.type}</h2>
          <div className={"project-image"}>
            <a href={project.link} target={"_blank"} rel={"noreferrer"}>
              <img
                alt="screenshot of {project.type}"
                src={projectSRC[index]}
                description={""}
              />
            </a>
          </div>

          <div className={"project-content"}>
            <span className={"green project-featured"}>{project.type}</span>
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
                style={{ marginLeft: !project.github ? "1rem" : "0rem" }}
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
