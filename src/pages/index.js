import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import cardData from "../data/card.json"
import introData from "../data/intro.json"
import content from "../data/content.json"

import "../assets/scss/main.scss"
import Layout from "../components/layout.js"
import Card from "../components/card.js"
import Tools from "../components/tools.js"
import About from "../components/about.js"
import Built from "../components/built.js"

export default function Home() {
  return (
    <Layout>
      <section>
        <div className={"container"}>
          <p className={"hello green"}>{introData.hello}</p>
          <h2 className={"heading-lg"}>{introData.name}</h2>
          <h2 className={"heading-lg slate"} style={{ margin: "6px 0 6px 0" }}>
            {introData.profession}
          </h2>
          <Tools />
          <p className={"supporting-content slate"}>{introData.main}</p>
          {/* <p>{introData.supporting}</p> */}
          <AniLink
            className="btn btn-contact"
            paintDrip
            hex={"#e6e6e6"}
            to="/contact/"
          >
            Get in touch
          </AniLink>
          {/* <h2>Projects</h2> */}
          {/* <h2>Expirements</h2> */}
          <About />
          <h2 style={{ marginTop: "2rem" }}>Professional Work</h2>
          <div className={"card--grid"}>
            {cardData.map((card, index) => (
              <div className="card--wrapper" key={index}>
                <Card
                  key={index}
                  source={card.source}
                  title={card.title}
                  description={card.description}
                  cta={card.cta}
                  link={card.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
