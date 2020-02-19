import React from "react"
import styled from "styled-components"

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
        <IconContainer>
          <Image src={logoDevOps} alt="DevOps Consulting" className="img-nav" />
          {changeFaviconAndTitle("Clever DevOps | DevOps Consulting", faviconDevops)}
        </IconContainer>
      )
    case "development":
      return (
        <IconContainer>
          {changeFaviconAndTitle("Clever Development | Software Development" , faviconDev)}
          <Image
            src={logoDevelopment}
            alt="Software Development"
            className="img-nav"
          />
        </IconContainer>
      )
    case "qa":
      return (
        <IconContainer>
          {changeFaviconAndTitle("Clever QA | Quality Assurance Consulting" , faviconQa)}
          <Image src={logoQa} alt="Quality Assurance" className="img-nav" />
        </IconContainer>
      )
      
    case "agile":
      return (
        <IconContainer>
          {changeFaviconAndTitle("Clever Agile | Agile Mindset" , faviconAgile)}
          <Image src={logoAgile} alt="Agile Mindset" className="img-nav" />
        </IconContainer>
      )
      
    case "ux":
      return (
        <IconContainer>
          {changeFaviconAndTitle("Clever Experience | UI/UX Design Agency, Consulting & Branding" , faviconExperience)}
          <Image
            src={logoEx}
            alt="UX Consulting & Branding"
            className="img-nav"
          />
        </IconContainer>
      )
    default:
      return (
        <IconContainer>
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
        </IconContainer>
      )
  }
}

const IconContainer = styled.div`
  height: 80%;
  margin: auto 0px 2px;

  @media (max-width: 1100px) {
    margin-top: 10px;
    display: flex;
  }
`;

export default Brand
