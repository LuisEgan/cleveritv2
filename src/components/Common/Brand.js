import React from "react"

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

const Brand = props => {
  const changeFaviconAndTitle = (link, title) => {
    let $favicon = document.querySelector('link[rel="icon"]')
    if ($favicon !== null) {
      $favicon.href = link
    } else {
      $favicon = document.createElement("link")
      $favicon.rel = "icon"
      $favicon.href = link
      document.head.appendChild($favicon)
    }
    document.title = title
  }

  switch (props.location) {
    case "devops":
      changeFaviconAndTitle(faviconDevops, "Clever DevOps | DevOps Consulting")
      return (
        <Image src={logoDevOps} alt="DevOps Consulting" className="img-nav" />
      )
    case "development":
      changeFaviconAndTitle(
        faviconDev,
        "Clever Development | Software Development"
      )
      return (
        <Image
          src={logoDevelopment}
          alt="Software Development"
          className="img-nav"
        />
      )
    case "qa":
      changeFaviconAndTitle(
        faviconQa,
        "Clever QA | Quality Assurance Consulting"
      )
      return <Image src={logoQa} alt="Quality Assurance" className="img-nav" />
    case "agile":
      changeFaviconAndTitle(faviconAgile, "Clever Agile | Agile Mindset")
      return <Image src={logoAgile} alt="Agile Mindset" className="img-nav" />
    case "ux":
      changeFaviconAndTitle(
        faviconExperience,
        "Clever Experience | UI/UX Design Agency, Consulting & Branding"
      )
      return (
        <Image
          src={logoEx}
          alt="UX Consulting & Branding"
          className="img-nav"
        />
      )
    default:
      changeFaviconAndTitle(
        faviconHome,
        "Cleverit | Software, DevOps, Consulting & Cognitive"
      )
      return <Image src={logo} alt="Company Logo" className="img-nav" />
  }
}

export default Brand
