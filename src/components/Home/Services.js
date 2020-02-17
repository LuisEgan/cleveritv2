import React from "react"
import data from "../../data/content.json"
import { connect } from "react-redux"
import devOps from "../../images/logo_devOps_withe.svg"
import dev from "../../images/logo_dev_withe.svg"
import ux from "../../images/logo_ex_withe.svg"
import agile from "../../images/logo_agile_withe.svg"
import qa from "../../images/logo_qa_withe.svg"
import xr from "../../images/logo_xr_withe.svg"
import { Row, Col, Button, Card, Image } from "react-bootstrap"
import { Link } from "gatsby"
import styled from "styled-components"
import { COLORS } from "../../utils/page"

let Services = props => {
  return (
    <>
      <Row className={`${props.classAnimationVideo} row-services`}>
        <Row className="row-cards-services  justify-content-center">
          <Col xl={10} lg={10} xs={12} className="align-self-center">
            <Row className=" justify-content-center">
              <Col xl={4} xs={12}>
                <Card style={{ width: "100%" }} className="card-devOps">
                  <Card.Body>
                    <Row className=" justify-content-center">
                      <Image src={devOps} className="hover-arrow"></Image>
                    </Row>
                    <Row className="row-description-card">
                      <p>{data.DevOps[props.app.lang].sectionMain.mainTitle}</p>
                    </Row>
                    <Row className="justify-content-center">
                      <Button size="lg" block className="btn-devOps">
                        <NoLink to="/devops" color={COLORS.devops}>
                          {
                            data.Home[props.app.lang].sectionServices
                              .wantKnowMore
                          }
                        </NoLink>
                      </Button>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4}>
                <Card style={{ width: "100%" }} className="card-development">
                  <Card.Body>
                    <Row className=" justify-content-center">
                      <Image src={dev} className="hover-arrow"></Image>
                    </Row>
                    <Row className="row-description-card">
                      <p>
                        {data.Development[props.app.lang].sectionMain.mainTitle}
                      </p>
                    </Row>
                    <Row className="justify-content-center">
                      <Button size="lg" block className="btn-dev">
                        <NoLink to="/development" color={COLORS.development}>
                          {
                            data.Home[props.app.lang].sectionServices
                              .wantKnowMore
                          }
                        </NoLink>
                      </Button>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4}>
                <Card style={{ width: "100%" }} className="card-ux">
                  <Card.Body>
                    <Row className=" justify-content-center">
                      <Image src={ux} className="hover-arrow"></Image>
                    </Row>
                    <Row className="row-description-card">
                      <p>{data.UX[props.app.lang].sectionMain.mainTitle}</p>
                    </Row>
                    <Row className="justify-content-center">
                      <Button size="lg" block className="btn-ux">
                        <NoLink to="/ex" color={COLORS.ux}>
                          {
                            data.Home[props.app.lang].sectionServices
                              .wantKnowMore
                          }
                        </NoLink>
                      </Button>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4}>
                <Card style={{ width: "100%" }} className="card-agile">
                  <Card.Body>
                    <Row className=" justify-content-center">
                      <Image src={agile} className="hover-arrow"></Image>
                    </Row>
                    <Row className="row-description-card">
                      <p>{data.Agile[props.app.lang].sectionMain.mainTitle}</p>
                    </Row>
                    <Row className="justify-content-center">
                      <Button size="lg" block className="btn-agile">
                        <NoLink to="/agile" color={COLORS.agile}>
                          {
                            data.Home[props.app.lang].sectionServices
                              .wantKnowMore
                          }
                        </NoLink>
                      </Button>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4}>
                <Card style={{ width: "100%" }} className="card-qa">
                  <Card.Body>
                    <Row className=" justify-content-center">
                      <Image src={qa} className="hover-arrow"></Image>
                    </Row>
                    <Row className="row-description-card">
                      <p>{data.QA[props.app.lang].sectionMain.mainTitle}</p>
                    </Row>
                    <Row className="justify-content-center">
                      <Button size="lg" block className="btn-qa">
                        <NoLink to="/qa" color={COLORS.qa}>
                          {
                            data.Home[props.app.lang].sectionServices
                              .wantKnowMore
                          }
                        </NoLink>
                      </Button>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col xl={4}>
                <Card style={{ width: "100%" }} className="card-xr">
                  <Card.Body>
                    <Row className=" justify-content-center">
                      <Image src={xr} className="hover-arrow"></Image>
                    </Row>
                    <Row className="row-description-card">
                      <p>{data.VR[props.app.lang].sectionMain.mainTitle}</p>
                    </Row>
                    <Row className="justify-content-center">
                      <Button size="lg" block className="btn-xr">
                        <NoLinkA
                          href="https://www.xr.cleveritgroup.com"
                          color={COLORS.xr}
                        >
                          {
                            data.Home[props.app.lang].sectionServices
                              .wantKnowMore
                          }
                        </NoLinkA>
                      </Button>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="row-help">
          <p>
            {data.UX[props.app.lang].sectionPlan.help}
            <span style={{ color: `${COLORS.default}`, fontWeight: "bold" }}>
              {" "}
              {data.UX[props.app.lang].navBar.contact}
            </span>{" "}
          </p>
        </Row>
      </Row>
    </>
  )
}

const NoLinkA = styled.a`
  color: ${props => props.color};
  :visited {
    text-decoration: none;
    color: ${props => props.color};
  }
  :hover {
    text-decoration: none;
    color: ${props => props.color};
  }
  :focus {
    text-decoration: none;
    color: ${props => props.color};
  }
  :hover,
  :active {
    text-decoration: none;
    color: ${props => props.color};
  }
`

const NoLink = styled(Link)`
  color: ${props => props.color};
  :visited {
    text-decoration: none;
    color: ${props => props.color};
  }
  :hover {
    text-decoration: none;
    color: ${props => props.color};
  }
  :focus {
    text-decoration: none;
    color: ${props => props.color};
  }
  :hover,
  :active {
    text-decoration: none;
    color: ${props => props.color};
  }
`

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    changeLang: lang => dispatch({ type: "SET_LANGUAGE", payload: lang }),
  }
}

Services = connect(mapStateToProps, mapDispatchToProps)(Services)
export default Services
