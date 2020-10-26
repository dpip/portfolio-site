import React from "react"
import "../../assets/scss/work.scss"

import Card from "../../components/card.js"

export default props => (
  <div className={"container"}>
    <h2 id={"work"} className={"heading-section"} style={{ marginTop: "2rem" }}>
      <span>{props.content.bodyTitle}</span>
      <div className="rule"></div>
    </h2>
    <section className={"container work-wrapper"}>
      <div className={"card--grid"}>
        {props.content.cards.map((card, index) => (
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
    </section>
  </div>
)
