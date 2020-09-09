import React from "react"
import { Link } from "gatsby"
import "../assets/scss/main.scss"
import Layout from "../components/layout.js";
import Button from "../components/button.js";
import Card from "../components/card.js";



export default function Home() {
  return <Layout>
          <section>
            <div className={'container'}>
              <h1 className={'red'}>Daniel Pipkin</h1>
              <h2>Front-end Developer | Raleigh, NC</h2>
              <p>For though result and talent add are parish valley. Songs in oh other avoid it hours woman style. In myself family as if be agreed. Gay collected son him knowledge delivered put. Added would end ask sight and asked saw dried house. Property expenses yourself occasion endeavor two may judgment she. Me of soon rank be most head time tore. Colonel or passage to ability.</p>
              <p>No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken.</p>
              <Link className="btn btn-contact" to="/contact/">Contact me</Link>
              <h2>Projects</h2>
              <div className={'row row__card'}>
                <Card source={''} title={'Project title'} description={'The description will end up right here.'} cta={'View project'}/>
                <Card source={''} title={'Project title'} description={'The description will end up right here.'} cta={'View project'}/>
                <Card source={''} title={'Project title'} description={'The description will end up right here.'} cta={'View project'}/>
              </div>
            </div>
          </section>
        </Layout>
}
