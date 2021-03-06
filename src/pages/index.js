import React, { useState } from "react"

import scrollTo from "gatsby-plugin-smoothscroll"

import "../assets/scss/main.scss"

import content from "../data/content.json"

import Layout from "../components/layout.js"
import SEO from "../components/seo/seo.js"
import Intro from "../components/sections/intro.js"
import About from "../components/sections/about.js"
import Work from "../components/sections/work.js"
import Experimental from "../components/sections/experimental.js"
import GetInTouch from "../components/sections/getInTouch.js"
import LoadScreen from "../components/loadScreen.js"

const Home = props => {
  const [nav] = useState(false)

  const toSection = () => {
    let sectionState = props.location.state
    if (!sectionState) {
      return
    } else {
      scrollTo(`#${sectionState.section}`)
    }
  }

  toSection()

  return (
    <>
      <Layout type={"index"} nav={nav}>
        <SEO title="Daniel Pipkin - home" />
        <section>
          <Intro content={content.intro} />
          <About content={content.about} />
          <Work content={content.work} />
          <Experimental content={content.experiments} />
          <GetInTouch />
        </section>
      </Layout>
      <LoadScreen />
    </>
  )
}

export default Home
