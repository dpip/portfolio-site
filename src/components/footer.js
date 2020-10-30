import React from "react"
import "../assets/scss/footer.scss"
import Avatar from "../assets/images/dpip.jpeg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default props => (
  <footer>
    <div className={"container"}>
      <div className={"footer__top"}>
        <AniLink
          className={"avatar avatar__small"}
          paintDrip
          hex={"#e6f1ff"}
          to="/"
        >
          <img
            alt="avatar of author daniel pipkin"
            width={"35"}
            height={"35"}
            src={Avatar}
          />
        </AniLink>
      </div>
      <div className={"row footer__bottom"}>Built by Daniel Pipkin</div>
      <p className={"credits"}>
        <span role="img" aria-label="alien emoji">
          👾
        </span>
        &nbsp; Using &nbsp;
        <a href={"https://www.gatsbyjs.com/"} target={"blank"} rel="noreferrer">
          Gatsby
        </a>
        , &nbsp;
        <a
          href={"https://www.npmjs.com/package/react-particles-js"}
          target={"blank"}
        >
          react-particles
        </a>
        , &nbsp;and&nbsp;
        <a
          href={"https://www.npmjs.com/package/react-particles-js"}
          target={"blank"}
        >
          react-reveal
        </a>
        &nbsp;
        <span role="img" aria-label="alien emoji">
          👾
        </span>
      </p>
    </div>
  </footer>
)
