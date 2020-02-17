import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Row } from "react-bootstrap"
import { connect } from "react-redux"
import { Link } from "gatsby"
import {
  getData,
  getSuiteColor,
  getAnimation,
  changeFaviconAndTitle,
} from "../utils/page"
import faviconHome from "../images/favicon/home/favicon.ico"

let NotFoundPage = props => {
  const {
    app: { lang },
    location,
  } = props

  const content = getData("notFound", lang)
  const color = getSuiteColor(location)
  const animation = getAnimation("notFound")
  changeFaviconAndTitle(
    faviconHome,
    "Cleverit | Software, DevOps, Consulting & Cognitive"
  )

  const Button404 = styled(Link)`
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

  return (
    <>
      <SEO title="404: Not found" />
      <ContainerPage className="container">
        <Row className="justify-content-center">{animation}</Row>
        <Page className="row justify-content-center">
          <h1>404</h1>
        </Page>
        <Page className="row justify-content-center">
          <p>{content.text.message}</p> <br></br> <p>{content.text.song}</p>
        </Page>
        <Page className="row justify-content-center">
          <Button404 to={"/"}>{content.text.button}</Button404>
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
