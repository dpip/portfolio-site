import React from "react"

import cardData from "../data/card.json"
import content from "../data/content.json"

import "../assets/scss/main.scss"
import Layout from "../components/layout.js"
import Intro from "../components/sections/intro.js"
import About from "../components/sections/about.js"
import Work from "../components/sections/work.js"
import Experimental from "../components/sections/experimental.js"

export default function Home() {
  return (
    <Layout>
      <section>
        <div className={"container"}>
          <Intro content={content.intro} />
          <About content={content.about} />
          <Work content={content.work} />
          <Experimental content={content.experiments} />
        </div>
      </section>
    </Layout>
  )
}
