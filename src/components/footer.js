import React from "react"
import "../assets/scss/footer.scss"
import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default (props) =>

<footer>
  <div className={'container'}>
    <div className={'footer__top'}>
      <AniLink className={'avatar avatar__small'} paintDrip hex={'#e6e6e6'} to="/">Avatar</AniLink>
    </div>
    <div className={'row footer__bottom'}>
      <a className={'social-item'}>Linkedin</a>
      <a className={'social-item'}>Github</a>
      <a className={'social-item'}>Codepen</a>
      <a className={'social-item'}>Contact</a>
    </div>
  </div>
</footer>
