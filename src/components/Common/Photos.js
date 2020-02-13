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
    display: none;
  }
`
const Child = styled.div`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  & img {
    width: 100%;
  }
  :before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`

const Parent = styled.div`
  width: 100%;
  margin: 0.5rem;
  padding: 0;

  overflow: hidden;

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
    display: block;
  }
`
const ShowCarousel = styled.div`
  display: none;

  @media screen and (max-width: 450px) {
    display: inline;
    justify-content: center;
    text-align: center;
    align-self: center;
    padding-bottom: 4rem;
    &.col-sm-12 .col-12 {
      padding-right: 0;
      padding-left: 0;
      padding-bottom: 4rem;
    }
  }
`
const ImgCarousel = styled.img`
  width: 400px;
  height: 250px;
`
