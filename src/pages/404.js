import React from "react"
import img from "../images/404.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "react-bootstrap/Image"
import styled from "styled-components"
import { Container, Row } from "react-bootstrap"
import { connect } from "react-redux"
import { getData, getSuiteColor } from "../utils/page"
import Animation from "../components/Animations/Animation404"
import data from "../data/content.json"
let NotFoundPage = props => {
  const {
    app: { lang },
    location,
  } = props
  /*  const content = getData(location, lang) */
  const color = getSuiteColor(location)
  const Button = styled.a`
    text-decoration: none;
    padding: 1rem;
    border-width: 0px;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    background-color: ${color};
    color: white;
    margin-top: 2rem;
    :hover {
      text-decoration: none;
      color: white;
      padding: 1.2rem;
    }
  `
  let content
  switch (location) {
    case "development":
      content = data.NotFound[lang]

      break
    case "qa":
      content = data.NotFound[lang]

      break
    case "agile":
      content = data.NotFound[lang]

      break
    case "ux":
      content = data.NotFound[lang]

      break
    case "devops":
      content = data.NotFound[lang]

      break
    default:
      content = data.NotFound[lang]

      break
  }
  return (
    <>
      <SEO title="404: Not found" />
      <ContainerPage className="container">
        <Row className="justify-content-center">
          {/*  <Image404 src={img}></Image404> */}
          <Animation></Animation>
        </Row>
        <Page className="row justify-content-center">
          <h1>404</h1>
        </Page>
        <Page className="row justify-content-center">
          <p>{content.text.message}</p> <br></br> <p>{content.text.song}</p>
        </Page>
        <Page className="row justify-content-center">
          <Button href="https://www.cleveritgroup.com/">
            {content.text.button}
          </Button>
        </Page>
      </ContainerPage>
    </>
  )
}
const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    changeLang: lang => dispatch({ type: "SET_LANGUAGE", payload: lang }),
  }
}

NotFoundPage = connect(mapStateToProps, mapDispatchToProps)(NotFoundPage)
export default NotFoundPage

const ContainerPage = styled.div`
  padding-top: 5rem;
`
const Page = styled.div`
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`
const Image404 = styled.img`
  width: 400px;
`
