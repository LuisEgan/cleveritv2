import React from "react"
import arauco from "../../images/arauco_logo.svg"
import adt from "../../images/adt_logo.svg"
import propins from "../../images/propins_logo.svg"
import cat from "../../images/cat_logo.svg"
import forus from "../../images/forus_logo.svg"
import falabella from "../../images/falabella_logo.svg"
import { Col, Image } from "react-bootstrap"
import styled from "styled-components"

class Companies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageshow: "hidden",
    }
  }
  componentDidMount() {
    this.setState({ imageshow: "delay" })
  }

  render() {
    return (
      <>
        <RowCompany
          className={`justify-content-center row ${this.props.classAnimationCompanies} `}
        >
          <Col
            xs={6}
            sm={6}
            md={5}
            lg={3}
            xl={2}
            className="align-self-center align-items-center"
          >
            {/* CAROUSEL ONE */}
            <FadeImages>
              <Image src={falabella} alt="Falabella"></Image>
              <Image src={adt}></Image>
              <Image src={cat}></Image>
              <Image src={propins}></Image>
            </FadeImages>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={5}
            lg={3}
            xl={2}
            className="align-self-center align-items-center"
          >
            {/* CAROUSEL ONE */}
            <FadeImages>
              <Image src={arauco}></Image>
              <Image src={cat}></Image>
              <Image src={forus}></Image>
              <Image src={adt}></Image>
            </FadeImages>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={5}
            lg={3}
            xl={2}
            className="align-self-center align-items-center"
          >
            {/* CAROUSEL ONE */}
            <FadeImages>
              <Image src={propins}></Image>
              <Image src={falabella}></Image>
              <Image src={adt}></Image>
              <Image src={cat}></Image>
            </FadeImages>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={5}
            lg={3}
            xl={2}
            className="align-self-center align-items-center"
          >
            {/* CAROUSEL ONE */}
            <FadeImages>
              <Image src={cat}></Image>
              <Image src={propins}></Image>
              <Image src={arauco}></Image>
              <Image src={arauco}></Image>
            </FadeImages>
          </Col>
        </RowCompany>
        <RowCompanyTwo
          className={`justify-content-center row ${this.props.classAnimationCompanies} `}
        >
          <Col
            xs={6}
            sm={6}
            md={5}
            lg={3}
            xl={2}
            className="align-self-center align-items-center"
          >
            {/* CAROUSEL ONE */}
            <FadeImages>
              <Image src={adt}></Image>
              <Image src={forus}></Image>
              <Image src={falabella}></Image>
              <Image src={forus}></Image>
            </FadeImages>
          </Col>
          <Col
            xs={6}
            sm={6}
            md={5}
            lg={3}
            xl={2}
            className="align-self-center align-items-center"
          >
            {/* CAROUSEL ONE */}
            <FadeImages>
              <Image src={forus}></Image>
              <Image
                src={arauco}
                className={` ${this.props.showImages} `}
              ></Image>
              <Image src={propins}></Image>
              <Image src={falabella}></Image>
            </FadeImages>
          </Col>
        </RowCompanyTwo>
      </>
    )
  }
}
export default Companies

const FadeImages = styled.div`
  position: relative;
  will-change: auto;
  margin-top: 5rem;
  & img {
    width: 70%;
    animation-name: cf4;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-duration: 8s;
    position: absolute;

    left: 0;
  }
  & img:nth-of-type(1) {
    animation-delay: 6s;
  }
  & img:nth-of-type(2) {
    animation-delay: 4s;
  }
  & img:nth-of-type(3) {
    animation-delay: 2s;
  }
  & img:nth-of-type(4) {
    animation-delay: 0;
  }
  @keyframes cf4 {
    0% {
      opacity: 1;
    }
    17% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    92% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1080px) {
    margin-top: 50%;
    justify-content: center;
    text-align: center;
    margin-left: 2rem;
    margin-right: auto;

    & img {
      width: 90% !important;
      animation-name: cf4;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 8s;
      position: absolute;
      margin-left: auto;
      margin-right: auto;

      left: 0;
    }
  }
  @media screen and (max-width: 400px) {
    margin-top: 4rem;
    margin-left: 2rem;
    & img {
      width: 70% !important;

      animation-name: cf4;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-duration: 8s;
      position: absolute;

      left: 0;
    }
  }
`
const RowCompany = styled.div`
  text-align: center;
  align-content: center;
`
const RowCompanyTwo = styled.div`
  text-align: center;
  align-content: center;
  @media screen and (max-width: 1080px) {
    margin-top: 1rem;
  }
`
