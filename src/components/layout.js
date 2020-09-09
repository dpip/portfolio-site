import React from "react"
import "../assets/scss/header.scss"
import "../assets/scss/layout.scss"
import "../assets/scss/particles.scss"
import Header from "./header.js"
import Footer from "./footer.js"

import Particles from 'react-particles-js';

export default ({ children }) =>

<>
  <Header />
    {children}
    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
  <Footer />
</>
