import React from "react"
import data from "../../data/content.json"
import arauco from "../../images/arauco_logo_white.svg"
import adt from "../../images/adt_logo_white.svg"
import propins from "../../images/propins_logo_white.svg"
import cat from "../../images/cat_logo_white.svg"
import forus from "../../images/forus_logo_white.svg"
import falabella from "../../images/falabella_logo_white.svg"
import { Row, Col, Image } from "react-bootstrap"
import { connect } from "react-redux"

class Companies extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageshow: "hidden",
      data,
    }
  }
  componentDidMount() {
    this.setState({ imageshow: "delay" })
  }
  render() {
    return (
      <>
        <Row
          className={`justify-content-center company ${this.props.classAnimationCompanies} `}
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
            <div id="fadeImages">
              <Image src={falabella}></Image>
              <Image src={adt}></Image>
              <Image src={cat}></Image>
              <Image src={propins}></Image>
            </div>
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
            <div id="fadeImages" className="fade-images ">
              <Image src={arauco}></Image>
              <Image src={cat}></Image>
              <Image src={forus}></Image>
              <Image src={adt}></Image>
            </div>
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
            <div id="fadeImages">
              <Image src={propins}></Image>
              <Image src={falabella}></Image>
              <Image src={adt}></Image>
              <Image src={cat}></Image>
            </div>
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
            <div id="fadeImages">
              <Image src={cat}></Image>
              <Image src={propins}></Image>
              <Image src={arauco}></Image>
              <Image src={arauco}></Image>
            </div>
          </Col>
        </Row>
        <Row
          className={`justify-content-center company ${this.props.classAnimationCompanies} companies-file-two `}
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
            <div id="fadeImages">
              <Image src={adt}></Image>
              <Image src={forus}></Image>
              <Image src={falabella}></Image>
              <Image src={forus}></Image>
            </div>
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
            <div id="fadeImages">
              <Image src={forus}></Image>
              <Image
                src={arauco}
                className={` ${this.props.showImages} `}
              ></Image>
              <Image src={propins}></Image>
              <Image src={falabella}></Image>
            </div>
          </Col>
        </Row>
      </>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    changeLang: lang => dispatch({ type: "SET_LANGUAGE", payload: lang }),
  }
}

Companies = connect(mapStateToProps, mapDispatchToProps)(Companies)
export default Companies
