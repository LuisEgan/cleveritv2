import React from "react"
import data from "../data/content.json"
import AnimationHome from "../components/Animations/AnimationHome"
import AnimationUx from "../components/Animations/AnimationUx"
import AnimationAgile from "../components/Animations/AnimationAgile"
import AnimationDev from "../components/Animations/AnimationDev"
import AnimationDevOps from "../components/Animations/AnimationDevOps"
import AnimationQa from "../components/Animations/AnimationQa"

export const getData = (location, lang) => {
  let content

  switch (location) {
    case "development":
      content = data.Development[lang]
      break
    case "qa":
      content = data.QA[lang]
      break
    case "agile":
      content = data.Agile[lang]
      break
    case "ux":
      content = data.UX[lang]
      break
    case "devops":
      content = data.DevOps[lang]
      break
    case "common":
      content = data.Common[lang]
      break
    default:
      content = data.Home[lang]
      break
  }
  return content
}

export const getCompanySize = companySize => {
  let parsed = ""
  switch (companySize) {
    case "1":
      parsed = "Solo yo"
      break
    case "2":
      parsed = "0-50"
      break
    case "3":
      parsed = "50-250"
      break
    case "4":
      parsed = "250+"
      break
    default:
      break
  }
  return parsed
}

export const getSuiteColor = location => {
  let color
  switch (location) {
    case "development":
      color = "#10ddc2"
      break
    case "qa":
      color = "#0bc075"
      break
    case "agile":
      color = "#faa03a"
      break
    case "ux":
      color = "#7e0cf5"
      break
    case "devops":
      color = "#eb6178"
      break
    default:
      color = "#371a9f"
      break
  }

  return color
}

export const getAnimation = location => {
  let animation
  switch (location) {
    case "development":
      animation = <AnimationDev />
      break
    case "qa":
      animation = <AnimationQa />
      break
    case "agile":
      animation = <AnimationAgile />
      break
    case "ux":
      animation = <AnimationUx />
      break
    case "devops":
      animation = <AnimationDevOps />
      break
    default:
      animation = <AnimationHome />
      break
  }

  return animation
}

export const COLORS = {
  qa: "#0bc075",
  development: "#10ddc2",
  devops: "#eb6178",
  agile: "#faa03a",
  xr: "#1b2a49",
  ux: "#7e0cf5",
  default: "#371a9f",
}
