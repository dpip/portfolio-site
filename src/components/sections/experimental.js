import React, { useState } from "react"
import "../../assets/scss/experimental.scss"

import Fade from "react-reveal/Fade"

import Card from "../card.js"

import content from "../../data/content.json"
const Experimental = props => {
  const featured = content.experiments.featuredExp
  const [cards, cardsVisible] = useState({
    visible: 3,
    btn: "more",
  })

  const moreCards = e => {
    e.preventDefault()
    console.log("clicked", featured.length)
    cards.visible === 3
      ? cardsVisible({ visible: featured.length, btn: "less" })
      : cardsVisible({ visible: 3, btn: "more" })
  }

  return (
    <div id={"experimental"} className={"container container--experimental"}>
      <Fade bottom distance={"24px"}>
        <h2 className={"heading-section"} style={{ marginTop: "2rem" }}>
          <span className={"heading-section--number"}>03.</span>
          <span>{props.content.bodyTitle}</span>
          <div className="rule"></div>
        </h2>
      </Fade>
      <Fade cascade bottom distance={"24px"}>
        <section className={"card--grid"}>
          <div className={"card--wrapper"}>
            {content.experiments.featuredExp
              .slice(0, cards.visible)
              .map((exp, index) => {
                return (
                  <Card
                    key={index}
                    title={exp.expTitle}
                    description={exp.expDescription}
                    url={exp.expURL}
                    tech={exp.expTech}
                  />
                )
              })}
          </div>
          <div
            className={"btn green"}
            role="presentation"
            onClick={e => moreCards(e)}
          >
            Show {cards.btn}
          </div>
        </section>
      </Fade>
    </div>
  )
}

export default Experimental
