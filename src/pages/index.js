import React from "react"

import "../assets/scss/main.scss"

import content from "../data/content.json"

import Layout from "../components/layout.js"
import Intro from "../components/sections/intro.js"
import About from "../components/sections/about.js"
import Work from "../components/sections/work.js"
import Experimental from "../components/sections/experimental.js"

const Home = () => {
  return (
    <Layout>
      <section>
        ] <Intro content={content.intro} />
        <About content={content.about} />
        <Work content={content.work} />
        <Experimental content={content.experiments} />
      </section>
    </Layout>
  )
}

export default Home
