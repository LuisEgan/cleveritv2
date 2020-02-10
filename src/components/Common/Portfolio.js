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
    margin-top: 2rem;
    padding-left: 5rem;
    padding-right: 5rem;
    border-radius: 4px;
    background-color: ${color};
    border-color: ${color};
    color: white;
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
  padding-left: 8%;
  padding-right: 45%;
  font-weight: bold;
  @media screen and (max-width: 1080px) {
    padding-left: 10%;
    padding-right: 10%;
    font-weight: bold;
  }
  @media screen and (max-width: 400px) {
    padding-left: 8%;
    padding-right: 10%;
    font-size: 1.5rem;
    font-weight: bold;
  }
`
const CardPortfolio = styled.div`
  margin-right: 1rem;
  margin-left: 1rem;
  margin-top: 3rem;
  width: 100%;
`
const Inner = styled.div`
  overflow: hidden;
  & img {
    transition: all 1.5s ease;
    :hover {
      transform: scale(1.5);
    }
  }
`

const cardBody = {
  paddingLeft: "3rem !important",
  paddingRight: "3rem !important",
  height: "30%",
}
