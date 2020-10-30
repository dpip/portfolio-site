import React from "react"
import "../assets/scss/background.scss"

import Particles from "react-particles-js"

export default props => (
  <>
    <Particles
      params={{
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 500,
            },
          },
          size: {
            value: 4,
          },
          move: {
            direction: "down",
            speed: 0.75,
          },
          color: "#e6f1ff",
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
        line_linked: {
          enable: true,
          opacity: 0.02,
        },
        retina_detect: true,
      }}
    />
  </>
)
