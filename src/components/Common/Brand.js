import React from "react"
import Helmet from 'react-helmet'

import logo from "../../images/logo_cleverit_color.svg"
import logoDevOps from "../../images/logoCleverDevOps.svg"
import logoDevelopment from "../../images/logoCleverDev.svg"
import logoAgile from "../../images/logoCleverAgile.svg"
import logoQa from "../../images/logoCleverQa.svg"
import logoEx from "../../images/logoCleverEx.svg"
import faviconDevops from "../../images/favicon/devops/favicon.ico"
import faviconDev from "../../images/favicon/development/favicon.ico"
import faviconAgile from "../../images/favicon/agile/favicon.ico"
import faviconExperience from "../../images/favicon/experience/favicon.ico"
import faviconQa from "../../images/favicon/qa/favicon.ico"
import faviconHome from "../../images/favicon/home/favicon.ico"
import { Image } from "react-bootstrap"
import { changeFaviconAndTitle } from "../../utils/page"



const Brand = props => {
  switch (props.location) {
    case "devops":
      return (
        <div>
          {changeFaviconAndTitle("Clever DevOps | DevOps Consulting", faviconDevops)}
          <Image src={logoDevOps} alt="DevOps Consulting" className="img-nav" />
        </div>
      )
    case "development":
      return (
        <div>
          {changeFaviconAndTitle("Clever Development | Software Development" , faviconDev)}
          <Image
            src={logoDevelopment}
            alt="Software Development"
            className="img-nav"
          />
        </div>
      )
    case "qa":
      return (
        <div>
          {changeFaviconAndTitle("Clever QA | Quality Assurance Consulting" , faviconQa)}
          <Image src={logoQa} alt="Quality Assurance" className="img-nav" />
        </div>
      )
      
    case "agile":
      return (
        <div>
          {changeFaviconAndTitle("Clever Agile | Agile Mindset" , faviconAgile)}
          <Image src={logoAgile} alt="Agile Mindset" className="img-nav" />
        </div>
      )
      
    case "ux":
      return (
        <div>
          {changeFaviconAndTitle("Clever Experience | UI/UX Design Agency, Consulting & Branding" , faviconExperience)}
          <Image
            src={logoEx}
            alt="UX Consulting & Branding"
            className="img-nav"
          />
        </div>
      )
    default:
      return (
        <div>
          {changeFaviconAndTitle("Cleverit | Software, DevOps, Consulting & Cognitive" , faviconHome)}
          <Image
            src={logo}
            alt="Company Logo"
            className="img-nav"
            style={{ cursor: "pointer" }}
            onClick={() => {
              window.location.href = "/"
            }}
          />
        </div>
      )
  }
}

export default Brand
