import React from "react"
import { connect } from "react-redux"
import ticket from "../../images/ticket.svg"
import { Row, Col, Button, Card, Carousel } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import styled from "styled-components"
import { getSuiteColor, getData } from "../../utils/page"

let Plan = props => {
  const {
    app: { lang },
    location,
  } = props

  const content = getData(location, lang)
  const color = getSuiteColor(location)

  const BtnPlanOutline = styled.button`
    padding-left: 20% !important;
    padding-right: 20% !important;
    color: ${color} !important;
    border-color: ${color} !important;
    :hover,
    :visited,
    :focus,
    :active {
      background-color: ${color} !important !important;
      border-color: ${color}!important !important;
      color: white !important;
      @media screen and (max-width: 400px) {
        padding-left: 15% !important;
        padding-right: 15% !important;
      }
    }
  `
  const BtnPlan = styled.button`
    padding-left: 20% !important;
    padding-right: 20% !important;
    background-color: ${color} !important;
    border-color: ${color} !important;
    color: white !important;
    :hover,
    :visited,
    :focus,
    :active {
      background-color: ${color} !important !important;
      border-color: ${color} !important !important;
      color: white !important;
      @media screen and (max-width: 400px) {
        padding-left: 15% !important;
        padding-right: 15% !important;
      }
    }
  `
  const TitlePlan = styled.h1`
    display: block !important;
    justify-content: center !important;
    text-align: center !important;
    margin-bottom: 3rem !important;
    font-weight: bold !important;
    color: ${color} !important;
    @media screen and (max-width: 400px) {
      font-size: 1.5rem !important;
    }
  `
  const CardPlanCustom = styled.div`
    justify-content: center !important;
    align-items: center !important;
    text-align: center !important;
    border-color: ${color} !important;
    height: 50rem !important;
  `
  return (
    <>
      <Row className=" justify-content-center">
        <TitlePlan>{content.sectionPlan.planTitle}</TitlePlan>
      </Row>
      <RowPlan
        className={` justify-content-center row ${props.classAnimationPlan}`}
      >
        {/* CARD STANDARD */}
        {content.sectionPlan.planSmart && (
          <ColCardPlan
            xl={{ span: 3 }}
            lg={{ span: 7 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            className="col-xl-3 col-lg-7 col-md-8 col-sm-12 col-xs-12"
          >
            <CardPlan style={{ width: "100%" }} className="card">
              <CardBobyPlan className="card-body">
                <CardPlanTitle className="card-title">
                  Standard Plan
                </CardPlanTitle>

                <p>{content.sectionPlan.planSecondTitleSmart}</p>

                <UlPlan>
                  {content.sectionPlan.planSmart.map((plan, index) => (
                    <li className="row" key={index}>
                      <ColTicket className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                        <Image src={ticket} style={{ width: "17px" }}></Image>
                      </ColTicket>
                      <ColTicket className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 ">
                        {plan.descriptionPlan}
                      </ColTicket>
                    </li>
                  ))}
                </UlPlan>
              </CardBobyPlan>
              <Card.Footer>
                <BtnPlanOutline
                  variant="outline-primary"
                  className="btn outline-primary"
                  onClick={() => props.showModalFunc(true)}
                >
                  {content.navBar.contact}
                </BtnPlanOutline>
              </Card.Footer>
            </CardPlan>
          </ColCardPlan>
        )}
        {/* CARD MEDIUM */}
        {content.sectionPlan.planMedium && (
          <ColCardPlan
            xl={{ span: 3 }}
            lg={{ span: 7 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            className="col-xl-3 col-lg-7 col-md-8 col-sm-12 col-xs-12"
          >
            <CardPlanCustom style={{ width: "100%" }} className="card">
              <CardBobyPlan className="card-body">
                <CardPlanTitle className="card-title">
                  Medium Plan
                </CardPlanTitle>
                <p>{content.sectionPlan.planSecondTitleSmart}</p>
                <UlPlan>
                  {content.sectionPlan.planMedium.map((plan, index) => (
                    <li className="row" key={index}>
                      <ColTicket className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                        <Image src={ticket} style={{ width: "17px" }}></Image>
                      </ColTicket>
                      <ColTicket className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 ">
                        {plan.descriptionPlan}
                      </ColTicket>
                    </li>
                  ))}
                </UlPlan>
              </CardBobyPlan>
              <Card.Footer>
                <BtnPlan
                  variant="outline-primary"
                  className="btn outline-primary"
                  onClick={() => props.showModalFunc(true)}
                >
                  {content.navBar.contact}
                </BtnPlan>
              </Card.Footer>
            </CardPlanCustom>
          </ColCardPlan>
        )}
        {/* CARD CUSTOM */}
        {content.sectionPlan.planCostume && (
          <ColCardPlan
            xl={{ span: 3 }}
            lg={{ span: 7 }}
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            className="col-xl-3 col-lg-7 col-md-8 col-sm-12 col-xs-12"
          >
            <CardPlan style={{ width: "100%" }} className="card">
              <CardBobyPlan className="card-body">
                <CardPlanTitle className="card-title">
                  Custom-made Plan
                </CardPlanTitle>

                <p>{content.sectionPlan.planSecondTitleCustom}</p>

                <UlPlan>
                  {content.sectionPlan.planCostume.map((plan, index) => (
                    <li className="row" key={index}>
                      <ColTicket className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                        <Image src={ticket} style={{ width: "17px" }}></Image>
                      </ColTicket>
                      <ColTicket className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 ">
                        {plan.descriptionPlan}
                      </ColTicket>
                    </li>
                  ))}
                </UlPlan>
              </CardBobyPlan>
              <Card.Footer>
                <BtnPlanOutline
                  variant="outline-primary"
                  className="btn outline-primary"
                  onClick={() => props.showModalFunc(true)}
                >
                  {content.navBar.contact}
                </BtnPlanOutline>
              </Card.Footer>
            </CardPlan>
          </ColCardPlan>
        )}
      </RowPlan>
      <Row
        className={`${props.classAnimationPlan} justify-content-center`}
        style={{ textAlign: "center" }}
      >
        <Col xl={12} lg={9} md={9} sm={10} xs={12}>
          <p>
            {content.sectionPlan.help}
            <span style={{ color: `${color}`, fontWeight: "bold" }}>
              {" "}
              {content.navBar.contact}
            </span>{" "}
          </p>
        </Col>
      </Row>
    </>
  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    changeLang: lang => dispatch({ type: "SET_LANGUAGE", payload: lang }),
    showModalFunc: show => dispatch({ type: "SHOW_MODAL", payload: show }),
  }
}

Plan = connect(mapStateToProps, mapDispatchToProps)(Plan)
export default Plan

const RowPlan = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding-bottom: 5rem;
  width: 100%;
  margin-left: 0rem;
`
const ColCardPlan = styled.div`
  @media screen and (max-width: 1080px) {
    padding-top: 1rem;
  }
`
const CardPlan = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50rem;
`

const CardBobyPlan = styled.div``
const CardPlanTitle = styled.div`
  font-weight: bold;
  color: #373a3c;
  font-size: 1.5rem;
`
const UlPlan = styled.ul`
  list-style-type: none;

  padding-left: 0;
  padding-right: 0;
  font-size: 1.2rem;
  text-align: left;
  & li {
    margin-top: 1.5rem;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
`
const ColTicket = styled.div`
  padding-right: 0 !important;
  padding-left: 0 !important;
  font-size: 1.02rem;
`
