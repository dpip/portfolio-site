import React from "react"
import "../assets/scss/layout.scss"
import Header from "./header.js"
import Footer from "./footer.js"

import Particles from "react-particles-js"

import { Container } from "@material-ui/core"

export default ({ children }) => (
  <Container fixed>
    <Header />
    {children}
    <Particles
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
    <Footer />
  </Container>
)
