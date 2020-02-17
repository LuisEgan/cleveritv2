import React from "react"
import { connect } from "react-redux"
import { Carousel, Card } from "react-bootstrap"
import styled from "styled-components"
import { getData } from "../../utils/page"

let Testimonies = props => {
  const {
    app: { lang },
    location,
  } = props

  const content = getData(location, lang)

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    )

  const widthScreen = window.innerWidth

  const testimonyArray = chunk(
    content.sectionPlan.testimonyList,
    widthScreen < 1000 ? 1 : 3
  )

  return (
    <>
      <RowPlan
        className={` justify-content-center row ${props.classAnimationPlan}`}
      >
        <>
          <Carousel style={CarouselTestimony}>
            {testimonyArray.map((plan, index) => (
              <Carousel.Item key={index}>
                <div
                  className="row"
                  style={{
                    with: "100%",
                  }}
                >
                  {plan.map((planDescription, index) => {
                    return (
                      <CountainerText
                        className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                        key={index}
                      >
                        <Card>
                          <Card.Body>
                            <RowTestimony className="row">
                              <Card.Title className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                {planDescription.name}
                              </Card.Title>
                              <Card.Subtitle className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                {planDescription.ocupation}
                              </Card.Subtitle>
                            </RowTestimony>
                            <RowTestimony>
                              <Card.Text>{planDescription.testimony}</Card.Text>
                            </RowTestimony>
                          </Card.Body>
                        </Card>
                      </CountainerText>
                    )
                  })}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </>
      </RowPlan>
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

Testimonies = connect(mapStateToProps, mapDispatchToProps)(Testimonies)
export default Testimonies

const CarouselTestimony = {
  textAlign: "center",
}

const RowPlan = styled.div`
  margin-left: auto !important;
  margin-right: auto !important;
  width: 100% !important;
  margin-left: 0rem !important;
  @media screen and (max-width: 1000px) {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
  }
`

const RowTestimony = styled.div`
  .card-subtitle {
    margin-bottom: 1rem !important;
  }
`
const CountainerText = styled.div`
  max-width: 32% !important;
  @media screen and (max-width: 1000px) {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
    margin-right: auto !important;
    margin-left: auto !important;
    max-width: 100% !important;
    width: 100% !important;
    & h4 {
      font-size: 1.2rem !important;
    }
  }
`
