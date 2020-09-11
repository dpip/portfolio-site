import React from "react"
import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "../assets/scss/main.scss"
import Layout from "../components/layout.js";
import Button from "../components/button.js";
import Card from "../components/card.js";

const cardItems = [
  {
    source: 'https://centerlinebeta.net/9541/',
    title: 'Aveva maturity assessment',
    description: 'An Asset Performance Strategy Assessment using Gatsby, SASS, and Hubspot API.',
    cta: 'View project'
  },
  {
    source: 'https://centerlinebeta.net/7745/public/',
    title: 'IBM i 30th Anniversary',
    description: 'Dynamic Microsite celebrating 30 years of innovation using JQuery, HandleBars, IBMv19, and SASS.',
    cta: 'View project'
  },
  {
    source: 'https://centerlinebeta.net/7745/public/',
    title: 'Ping Identity Assessment',
    description: 'Cross-currency assessment identifying security threats using JQuery and SASS.',
    cta: 'View project'
  },
  {
    source:'https://centerlinebeta.net/7745/public/',
    title:'The Green Chair Project',
    description:'Custom Wordpress template created for a Raleigh based charity donating home furnishings to those in need.',
    cta:'View project'
  },
  {
    source: 'https://centerlinebeta.net/7745/public/',
    title: 'IBM Security Anomoly Detection',
    description: 'Interactive Game built for IBM Think using React, Node.js, Electron, react-motion, and react-canvas.',
    cta: 'Download app'
  },
  {
    source: 'https://centerlinebeta.net/7745/public/',
    title: 'IBM Z Systems Server Interactive',
    description: 'Interactive server catalog Built for IBM Gartner Symposium booths using React, Node.js, Electron, react-Reveal, and IBM Carbon, and Kaon 3D.',
    cta: 'Download App'

  }
]

export default function Home() {
  return <Layout>
          <section>
            <div className={'container'}>
              <h1 className={'red'}>Daniel Pipkin</h1>
              <h2>Front-end Developer | Raleigh, NC</h2>
              <p>For though result and talent add are parish valley. Songs in oh other avoid it hours woman style. In myself family as if be agreed. Gay collected son him knowledge delivered put. Added would end ask sight and asked saw dried house. Property expenses yourself occasion endeavor two may judgment she. Me of soon rank be most head time tore. Colonel or passage to ability.</p>
              <p>No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken.</p>
              <AniLink className="btn btn-contact" paintDrip hex={'#e6e6e6'} to="/contact/">Contact me</AniLink>
              <h2>Projects</h2>
              <div className={'row row__card'}>
                <Card source={'https://centerlinebeta.net/9541/'} title={'Aveva maturity assessment'} description={'An Asset Performance Strategy Assessment using Gatsby, SASS, and Hubspot API.'} cta={'View project'}/>
                <Card source={'https://centerlinebeta.net/7745/public/'} title={'IBM i 30th Anniversary'} description={'Dynamic Microsite celebrating 30 years of innovation using JQuery, HandleBars, IBMv19, and SASS.'} cta={'View project'}/>
                <Card source={'https://centerlinebeta.net/7745/public/'} title={'Ping Identity Assessment'} description={'Cross-currency assessment identifying security threats using JQuery and SASS.'} cta={'View project'}/>
                <Card source={'https://centerlinebeta.net/7745/public/'} title={'The Green Chair Project'} description={'Custom Wordpress template created for a Raleigh based charity donating home furnishings to those in need.'} cta={'View project'}/>
                <Card source={'https://centerlinebeta.net/7745/public/'} title={'IBM Security Anomoly Detection'} description={'Interactive Game built for IBM Think using React, Node.js, Electron, react-motion, and react-canvas.'} cta={'Download app'}/>
                <Card source={'https://centerlinebeta.net/7745/public/'} title={'IBM Z Systems Server Interactive'} description={'Interactive server catalog Built for IBM Gartner Symposium booths using React, Node.js, Electron, react-Reveal, and IBM Carbon, and Kaon 3D.'} cta={'Download App'}/>
              </div>
            </div>
          </section>
        </Layout>
}
