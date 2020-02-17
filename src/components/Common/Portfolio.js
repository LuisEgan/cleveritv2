import React, { useState } from "react"
import { connect } from "react-redux"
import { getData, getSuiteColor } from "../../utils/page"
import { Row, Col, Card } from "react-bootstrap"
import styled from "styled-components"

const { Body, Title, Text } = Card

let Portfolio = props => {
  const {
    app: { lang },
    location,
  } = props
  const [visible, setVisible] = useState(4)
  const loadMore = () => {
    setVisible(visible + 2)
  }

  const content = getData(location, lang)
  const color = getSuiteColor(location)

  const BtnLoad = styled.div`
    margin-top: 2rem !important;
    padding-left: 5rem !important;
    padding-right: 5rem !important;
    border-radius: 4px !important;
    background-color: ${color} !important;
    border-color: ${color} !important;
    color: white !important;
    :hover,
    :focus,
    :visited:active {
      background-color: ${color} !important;
      border-color: ${color} !important;
      color: white;
    }
  `
  return (
    <>
      <Row
        className={`justify-content-center text-porfolio ${props.classAnimationPortfolio} `}
      >
        <Col
          xs={12}
          sm={12}
          md={10}
          lg={10}
          xl={12}
          className={`${props.classAnimationPortfolio} `}
        >
          <PortfolioTitle>
            {content.sectionPortfolio.portfolioTitle}
          </PortfolioTitle>
        </Col>
      </Row>

      <Row
        className={`justify-content-center ${props.classAnimationPortfolio} `}
      >
        {content.sectionPortfolio.cards.slice(0, visible).map((card, index) => {
          const renderIMG = require(`../../images/${card.img}`)
          return (
            <CardPortfolio
              className="col-12 col-sm-10 col-md-8 col-lg-8 col-xl-5 "
              key={index}
            >
              <Card style={{ width: "100%" }}>
                <Inner>
                  <Card.Img variant="top" src={renderIMG} alt={card.alt} />
                </Inner>
                <Body style={cardBody}>
                  <Title>{card.text}</Title>
                  <Text>{card.description}</Text>
                  <Text style={{ color: `${color}` }}>{card.area}</Text>
                </Body>
              </Card>
            </CardPortfolio>
          )
        })}
      </Row>
      <Row
        className={`justify-content-center ${props.classAnimationPortfolio} `}
      >
        {visible < content.sectionPortfolio.cards.length && (
          <BtnLoad onClick={() => loadMore()} className="btn">
            {" " + content.sectionPortfolio.loadMore}
          </BtnLoad>
        )}
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
  }
}

Portfolio = connect(mapStateToProps, mapDispatchToProps)(Portfolio)
export default Portfolio

const PortfolioTitle = styled.h1`
  padding-left: 8% !important;
  padding-right: 45% !important;
  font-weight: bold !important;
  @media screen and (max-width: 1080px) {
    padding-left: 10% !important;
    padding-right: 10% !important;
    font-weight: bold !important;
  }
  @media screen and (max-width: 400px) {
    padding-left: 8% !important;
    padding-right: 10% !important;
    font-size: 1.5rem !important;
    font-weight: bold !important;
  }
`
const CardPortfolio = styled.div`
  margin-right: 1rem !important;
  margin-left: 1rem !important;
  margin-top: 3rem !important;
  width: 100% !important;
`
const Inner = styled.div`
  overflow: hidden !important;
  & img {
    transition: all 1.5s ease !important;
    :hover {
      transform: scale(1.5) !important;
    }
  }
`

const cardBody = {
  paddingLeft: "3rem !important",
  paddingRight: "3rem !important",
  height: "30%",
}
