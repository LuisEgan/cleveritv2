import React, { useState } from "react"

import { Row, Col, Button, Card } from "react-bootstrap"
import data from "../../data/content.json"
import { usePost } from "../../hooks/usePost"

import { connect } from "react-redux"
import { getData } from "../../utils/page.js"

const { Body, Title, Text } = Card

let BlogHome = props => {
  const [visible, setVisible] = useState(3)

  const {
    app: { lang },
    location,
  } = props

  const content = getData(location, lang)

  const loadMore = () => {
    setVisible(visible + 2)
  }

  return (
    <>
      <Row
        className={`justify-content-center text-porfolio ${props.classAnimationPortfolio} `}
      >
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          className={`${props.classAnimationPortfolio} `}
        >
          <h1 className="portfolio-title">{content.sectionBlog.blogTitle}</h1>
        </Col>
      </Row>
      <Row
        className={`justify-content-center ${props.classAnimationPortfolio} `}
      >
        <Col
          xs={12}
          sm={10}
          md={8}
          lg={10}
          xl={8}
          className="align-self-center col-blog-cards"
        >
          {content.sectionBlog.blogList.slice(0, visible).map((card, index) => {
            return (
              <div
                className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 item-carousel"
                key={index}
              >
                <Card style={{ width: "100%" }}>
                  <div className="inner">
                    <Card.Img variant="top" src={card.img} />
                  </div>
                  <Body className="card-body-portfolio">
                    <Title>{card.text}</Title>
                    <Text>{card.description}</Text>
                    <Text className="area-text-home">{card.area}</Text>
                  </Body>
                </Card>
              </div>
            )
          })}
        </Col>
      </Row>
      <Row
        className={`justify-content-center ${props.classAnimationPortfolio} `}
      >
        {visible < content.sectionBlog.blogList.length && (
          <Button onClick={() => this.loadMore()} className="btn-loadMore-home">
            {" "}
            Cargar más
          </Button>
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

BlogHome = connect(mapStateToProps, mapDispatchToProps)(BlogHome)
export default BlogHome
