import React, { useLayoutEffect, useState } from "react"

import logoCleverit from "../../images/logo_cleverit.svg"
import { Col } from "react-bootstrap"
import { Link } from "gatsby"
import Image from "react-bootstrap/Image"
import { connect } from "react-redux"
import styled from "styled-components"
import { getData } from "../../utils/page"
import "../../style/Home/bodyHome.css"

let Footer = props => {
  const data = getData(props.location, props.app.lang)

  function useWindowSize() {
    const [size, setSize] = useState([0, 0])
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight])
      }
      window.addEventListener("resize", updateSize)
      updateSize()
      return () => window.removeEventListener("resize", updateSize)
    }, [])
    return size
  }

  let [width, height] = useWindowSize()
  let colSize = width < 400 ? 12 : 6

  return (
    <>
      <ContainerFooter
        color={props.color}
        className={` ${props.classAnimationFooter} row`}
      >
        <TitleFooter className="title-footer">
          <h1>{data.footer.talk}</h1>
        </TitleFooter>
        <TitleFooter className="title-footer">
          <h5>
            <NoLinkA href={`mailto:${data.footer.email}`}>
              {data.footer.email}
            </NoLinkA>
          </h5>
        </TitleFooter>
        <CleverSuitFooter className="row clerverSuit-footer">
          <Col
            xl={2}
            lg={2}
            md={{ span: colSize, order: 2 }}
            sm={{ span: colSize, order: 2 }}
            xs={{ span: colSize, order: 2 }}
          >
            <ul style={{ margin: colSize === 12 ? 0 : null }}>
              <li>
                <Link to="/devops"> Clever DevOps</Link>
              </li>
              <li>
                <Link to="/ux"> Clever Experience</Link>
              </li>
              <li>
                <Link to="/development">Clever Development</Link>
              </li>
            </ul>
          </Col>
          <Col
            xl={2}
            lg={2}
            md={{ span: colSize, order: 2 }}
            sm={{ span: colSize, order: 3 }}
            xs={{ span: colSize, order: 3 }}
          >
            <ul>
              <li>
                <Link to="/agile">Clever Agile</Link>
              </li>
              <li>
                <Link to="/qa">Clever QA</Link>
              </li>
              <li>
                <a href="https://www.xr.cleveritgroup.com/">Clever XR</a>
              </li>
              {/* <li>
                <Link to="/cloud">Clever Cloud</Link>
              </li> */}
            </ul>
          </Col>
          <Col
            xl={2}
            lg={2}
            md={{ span: colSize, order: 2 }}
            sm={{ span: colSize, order: 4 }}
            xs={{ span: colSize, order: 4 }}
          >
            <ul>
              <li>
                <Link to="">FAQ's</Link>
              </li>
              <li>
                <Link to="">{data.footer.terms}</Link>
              </li>
              <li>
                <Link to="">{data.footer.about}</Link>
              </li>
            </ul>
          </Col>
          <Col
            xl={2}
            lg={2}
            md={{ span: colSize, order: 2 }}
            sm={{ span: colSize, order: 5 }}
            xs={{ span: colSize, order: 5 }}
          >
            <ul>
              <li>
                <a href={`https://careers.cleveritgroup.com`}>
                  {data.footer.join}
                </a>
              </li>
              <li>
                <Link to="/blog">{data.footer.blog}</Link>
              </li>
              <li>
                <Link to="">Webinar</Link>
              </li>
            </ul>
          </Col>
          <Col
            xl={{ span: 3, offset: 1, order: 5 }}
            lg={{ span: 4, order: 5 }}
            md={{ span: 12, order: 1 }}
            sm={{ span: 12, order: 1 }}
            xs={{ span: 12, order: 1 }}
            className=""
          >
            <BtnFooterHome
              className="btn btn-footer-home"
              onClick={() => {
                props.showModalFunc(true)
              }}
            >
              {data.footer.button}
            </BtnFooterHome>
          </Col>
        </CleverSuitFooter>
        <RowSocial className="row justify-content-center row-social">
          {data.footer.instagramLink && (
            <Col
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={2}
              className="align-self-center responsiveIcons"
              style={{ textAlign: "center" }}
            >
              <span>
                <a
                  href={data.footer.instagramLink}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Instagram"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </span>
            </Col>
          )}
          {data.footer.behanceLink && (
            <Col
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={2}
              className="align-self-center responsiveIcons"
              style={{ textAlign: "center" }}
            >
              <span>
                <a
                  href={data.footer.behanceLink}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Behance"
                  role="button"
                >
                  <i className="fab fa-behance"></i>
                </a>
              </span>
            </Col>
          )}
          {data.footer.linkedInLink && (
            <Col
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={2}
              className="align-self-center responsiveIcons"
              style={{ textAlign: "center" }}
            >
              <span>
                <a
                  href={data.footer.linkedInLink}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Linkedlin"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </span>
            </Col>
          )}

          {data.footer.dribbbleLink && (
            <Col
              xl={1}
              lg={1}
              md={1}
              sm={1}
              xs={2}
              style={{ textAlign: "center" }}
            >
              <span>
                <a
                  href={`${data.footer.dribbbleLink}`}
                  data-toggle="tooltip"
                  data-placement="right"
                  title="Dribble"
                  role="button"
                >
                  <i className="fab fa-dribbble"></i>
                </a>
              </span>
            </Col>
          )}
        </RowSocial>
        <RowLogo className="row justify-content-center row-logo">
          <a href={data.footer.pageLink}>
            <Image src={logoCleverit}></Image>
          </a>
        </RowLogo>
        <RowDirection className="row  justify-content-center row-direction">
          <p>
            {data.footer.rigths} <br />
            <span> {data.footer.direction} </span>
          </p>
        </RowDirection>
      </ContainerFooter>
    </>
  )
}

const ContainerFooter = styled.div`
  background-color: ${props => props.color || "#371a9f"};
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: 10rem;
  padding-right: 10rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin-top: -4rem;

  @media screen and (max-width: 1080px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`

const TitleFooter = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 480px) {
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  & h1,
  h5 {
    color: white;
    font-weight: bold;
  }
`
const CleverSuitFooter = styled.div`
  width: 100%;
  margin-top: 4rem;
  margin-left: 0;
  margin-right: 0;

  @media screen and (max-width: 1080px) {
    justify-content: center;
    text-align: center;
  }
  & a {
    color: white;
  }
  & ul {
    list-style-type: none;
  }

  @media screen and (max-width: 1080px) {
    margin-bottom: 100px;
  }

  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
`
const BtnFooterHome = styled.button`
  font-size: 1.2rem !important;
  color: white !important;
  border-color: white !important;
  background-color: transparent !important;
  padding: 1rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
  border-radius: 4px !important;

  :hover,
  :focus,
  :visited,
  :active {
    background-color: ${props => props.color} !important;
    border-color: white !important;
    box-shadow: 0 0 0 0.2rem white !important;
    color: white;
  }
  @media screen and (max-width: 1080px) {
    padding: 1rem;

    margin-bottom: 4rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`

const RowSocial = styled.div`
  width: 100%;
  margin-top: 6rem;

  @media screen and (max-width: 480px) {
    margin-top: 15%;
  }
`
const RowLogo = styled.div`
  width: 100%;
  margin-top: 3rem;

  & img {
    width: 8rem;
  }
`

const RowDirection = styled.div`
  width: 100%;

  justify-content: center;
  text-align: center;
  & p {
    color: white;
    margin-top: 2rem;
  }
`

const NoLinkA = styled.a`
  color: white;
  :visited {
    text-decoration: none;
    color: white;
  }
  :hover {
    text-decoration: none;
    color: white;
  }
  :focus {
    text-decoration: none;
    color: white;
  }
  :hover,
  :active {
    text-decoration: none;
    color: white;
  }
`

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    showModalFunc: show => dispatch({ type: "SHOW_MODAL", payload: show }),
    changeLang: lang => dispatch({ type: "SET_LANGUAGE", payload: lang }),
  }
}

Footer = connect(mapStateToProps, mapDispatchToProps)(Footer)
export default Footer
