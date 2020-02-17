import React from "react"

import { Row, Col, Carousel } from "react-bootstrap"
import { connect } from "react-redux"
import Image from "react-bootstrap/Image"
import styled from "styled-components"
import { getData } from "../../utils/page"

let Photos = props => {
  const {
    app: { lang },
    location,
  } = props

  const content = getData(location, lang)
  const firstImage = require(`../../images/${content.photos.photoOne}`)
  const secondImage = require(`../../images/${content.photos.photoTwo}`)
  const thirdImage = require(`../../images/${content.photos.photoThree}`)
  const fourImage = require(`../../images/${content.photos.photoFour}`)
  const fiveImage = require(`../../images/${content.photos.photoFive}`)

  return (
    <>
      <Row style={{ paddingBottom: "5rem" }}>
        <RowPhotos
          className={`row justify-content-center ${props.classAnimationPhoto} `}
        >
          <Parent
            xl={3}
            lg={3}
            md={3}
            sm={8}
            className="col-xl-3 col-lg-3 col-md-3 col-sm-8"
          >
            <Child className="child1 ">
              <Image src={firstImage}></Image>
            </Child>
          </Parent>
          <Parent
            xl={3}
            lg={3}
            md={3}
            sm={8}
            className="col-xl-3 col-lg-3 col-md-3 col-sm-8"
          >
            <Child className="child1 ">
              <Image src={secondImage}></Image>
            </Child>
          </Parent>
          <Parent
            xl={3}
            lg={3}
            md={3}
            sm={8}
            className="col-xl-3 col-lg-3 col-md-3 col-sm-8"
          >
            <Child className="child1 ">
              <Image src={thirdImage}></Image>
            </Child>
          </Parent>
        </RowPhotos>
        <RowPhotos
          className={`row justify-content-center ${props.classAnimationPhoto} `}
        >
          <Parent
            xl={3}
            lg={3}
            md={3}
            sm={8}
            className="col-xl-3 col-lg-3 col-md-3 col-sm-8"
          >
            <Child className="child1 ">
              <Image src={fourImage}></Image>
            </Child>
          </Parent>
          <Parent
            xl={6}
            lg={6}
            md={6}
            sm={8}
            className="col-xl-6 col-lg-6 col-md-6 col-sm-8"
          >
            <Child className="child1 ">
              <Image src={fiveImage}></Image>
            </Child>
          </Parent>
        </RowPhotos>
        {/* IN MOBILE SHOW CAROUSEL */}
        <ShowCarousel className={`row ${props.classAnimationPhoto}`}>
          <Col sm={12} xs={12}>
            <Carousel>
              <Carousel.Item>
                <ImgCarousel
                  className=""
                  src={firstImage}
                  alt="team"
                ></ImgCarousel>
              </Carousel.Item>
              <Carousel.Item>
                <ImgCarousel
                  className=""
                  src={secondImage}
                  alt="team"
                ></ImgCarousel>
              </Carousel.Item>
              <Carousel.Item>
                <ImgCarousel
                  className=""
                  src={thirdImage}
                  alt="team"
                ></ImgCarousel>
              </Carousel.Item>
              <Carousel.Item>
                <ImgCarousel
                  className=""
                  src={fourImage}
                  alt="team"
                ></ImgCarousel>
              </Carousel.Item>
              <Carousel.Item>
                <ImgCarousel
                  className=""
                  src={fiveImage}
                  alt="team"
                ></ImgCarousel>
              </Carousel.Item>
            </Carousel>
          </Col>
        </ShowCarousel>
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

Photos = connect(mapStateToProps, mapDispatchToProps)(Photos)
export default Photos

const RowPhotos = styled.div`
  align-items: center;
  align-self: center;
  text-align: center;
  justify-content: center;

  width: 100%;
  @media screen and (max-width: 450px) {
    display: none !important;
  }
`
const Child = styled.div`
  width: 100% !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  -webkit-transition: all 0.5s !important;
  -moz-transition: all 0.5s !important;
  -o-transition: all 0.5s !important;
  transition: all 0.5s !important;
  & img {
    width: 100% !important;
  }
  :before {
    content: "" !important;
    display: none !important;
    height: 100% !important;
    width: 100% !important;
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
  }
`

const Parent = styled.div`
  width: 100% !important;
  margin: 0.5rem !important;
  padding: 0 !important;

  overflow: hidden !important;

  cursor: pointer;
  :hover .child1,
  :focus .child1 {
    -ms-transform: scale(1.6);
    -moz-transform: scale(1.6);
    -webkit-transform: scale(1.6);
    -o-transform: scale(1.6);
    transform: scale(1.6);
  }
  :hover .child1:before,
  :focus .child1:before {
    display: block !important;
  }
`
const ShowCarousel = styled.div`
  display: none !important;

  @media screen and (max-width: 450px) {
    display: inline !important;
    justify-content: center !important;
    text-align: center !important;
    align-self: center !important;
    padding-bottom: 4rem !important;
    &.col-sm-12 .col-12 {
      padding-right: 0 !important;
      padding-left: 0 !important;
      padding-bottom: 4rem !important;
    }
  }
`
const ImgCarousel = styled.img`
  width: 400px !important;
  height: 250px !important;
`
