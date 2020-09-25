import React from "react"
// import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import cardData from "../data/card.json"
import introData from "../data/intro.json"

import "../assets/scss/main.scss"
import Layout from "../components/layout.js"
import Card from "../components/card.js"
import Tools from "../components/tools.js"

import Grid from "@material-ui/core/Grid"

export default function Home() {
  return (
    <Layout>
      <section>
        <div className={"container"}>
          <h1 className={"red"}>{introData.name}</h1>
          <h2>
            {introData.profession} | {introData.location}
          </h2>
          <Tools />
          <p>{introData.main}</p>
          <p>{introData.supporting}</p>
          <AniLink
            className="btn btn-contact"
            paintDrip
            hex={"#e6e6e6"}
            to="/contact/"
          >
            Contact me
          </AniLink>
          {/* <h2>Projects</h2> */}
          {/* <h2>Expirements</h2> */}
          <h2 style={{ marginTop: "2rem" }}>Professional Work</h2>
          <div className={"card--grid"}>
            {cardData.map((card, index) => (
              <div className="card--wrapper">
                <Card
                  key={index}
                  source={card.source}
                  title={card.title}
                  description={card.description}
                  cta={card.cta}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
