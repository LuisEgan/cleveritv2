import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import reel from "../../images/video_back.mp4"
import { Row, Image } from "react-bootstrap"
import YoutubeVideo from "./YoutubeVideo"
import styled from "styled-components"
import imgBackground from "../../images/bg_mobile.png"
import { getSuiteColor, getData } from "../../utils/page"

let Services = props => {
  const {
    app: { lang },
    location,
  } = props

  const content = getData(location, lang)
  const color = getSuiteColor(location)

  const Circle = styled.svg`
    width: 10px !important;
    fill: ${color} !important;
  `
  const BtnWatchVideo = styled.button`
    padding-left: 2rem !important;
    padding-right: 2rem !important;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    color: white !important;
    border-color: white !important;
    background-color: transparent !important;

    margin-left: auto !important;
    margin-right: auto !important;
    :hover,
    :active,
    :focus,
    :visited {
      background-color: ${color} !important;
      border-color: ${color} !important;
      color: white !important;
    }
    @media screen and (max-width: 1080px) {
      padding-left: 30% !important;
      padding-right: 30% !important;
      padding-bottom: 1rem !important;
      padding-top: 1rem !important;
    }
    @media screen and (max-width: 400px) {
      padding-left: 20% !important;
      padding-right: 20% !important;
      padding-bottom: 1rem !important;
      padding-top: 1rem !important;
    }
  `
  const BtnColor = styled.button`
    background-color: ${color} !important;
    border-width: 0px !important;
    padding-left: 2rem !important;
    padding-right: 2rem !important;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    color: white !important;
    :hover,
    :active,
    :focus,
    :visited {
      background-color: ${color} !important;
      border-color: ${color} !important;
      color: white !important;
    }
    @media screen and (max-width: 1080px) {
      padding-left: 30% !important;
      padding-right: 30% !important;
      padding-bottom: 1rem !important;
      padding-top: 1rem !important;
    }
    @media screen and (max-width: 400px) {
      padding-left: 20% !important;
      padding-right: 20% !important;
      padding-bottom: 1rem !important;
      padding-top: 1rem !important;
    }
  `
  const [imageBackground, setImageBackground] = useState("hidden")
  const [hideVideo, setHideVideo] = useState("")
  const [showVideo, setShowVideo] = useState(false)
  const back = window.matchMedia("(max-width: 1080px)")

  useEffect(() => {
    back.addListener(handleBackground)
    handleBackground()
  })

  const showVideoFunc = () => {
    setShowVideo(!showVideo)
  }

  const handleBackground = () => {
    if (back.matches) {
      setImageBackground("image-background-show")
      setHideVideo("hidden")
    } else {
      setImageBackground("hidden")
      setHideVideo("")
    }
  }

  return (
    <>
      <Row>
        <YoutubeVideo
          show={showVideo}
          handleVideo={showVideoFunc}
        ></YoutubeVideo>
        <VideoContainer>
          <video
            autoPlay
            loop
            muted
            className={` fillWidth visible-lg ${hideVideo}`}
          >
            <source src={reel} type="video/mp4; " />
          </video>
          <Image src={imgBackground} className={`${imageBackground} `}></Image>
        </VideoContainer>
        <PositionText
          className={` justify-content-center row ${props.classAnimationVideo}`}
        >
          <ContentText
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className="col-12"
          >
            <h2>{content.sectionServices.servicesTitle}</h2>
            <UlSection>
              {content.sectionServices.servicesAbility.map((hab, index) => (
                <LiSection key={index}>
                  <div className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
                    <Circle
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 2 2"
                    >
                      <g>
                        <circle cx="1" cy="1" r="0.5" />
                        <path d="M1,0C0.45,0,0,0.45,0,1s0.45,1,1,1s1-0.45,1-1S1.55,0,1,0L1,0z" />
                      </g>
                    </Circle>
                  </div>
                  <DivHability className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                    {hab.ability}
                  </DivHability>
                </LiSection>
              ))}
            </UlSection>
            <Row
              className={` justify-content-center ${props.classAnimationVideo}`}
            >
              <ColButtonVideo xl={3} lg={4} className="col-xl-3 col-lg-4">
                <BtnWatchVideo
                  className="btn btn-block"
                  onClick={showVideoFunc}
                >
                  {content.sectionServices.servicesButtonReel}
                </BtnWatchVideo>
              </ColButtonVideo>
              <ColButtonVideo xl={3} lg={4} className="col-xl-3 col-lg-4">
                <BtnColor
                  className="btn btn-block"
                  onClick={() => props.showModalFunc(true)}
                >
                  {content.sectionServices.servicesButtonRequest}
                </BtnColor>
              </ColButtonVideo>
            </Row>
          </ContentText>
        </PositionText>
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

Services = connect(mapStateToProps, mapDispatchToProps)(Services)
export default Services

const VideoContainer = styled.div`
  top: 0%;
  left: 0%;
  height: 600px;
  width: 100%;
  overflow: hidden;
  z-index: -100;
  justify-content: center;

  text-align: center;
  @media screen and (max-width: 1080px) {
    top: 0%;
    left: 0%;
    width: 200%;
    overflow: hidden;
    z-index: -100;
    justify-content: center;

    text-align: center;
  }
  @media screen and (max-width: 400px) {
    top: 0%;
    left: 0%;
    height: 2000px;
    width: 300%;
    overflow: hidden;
    z-index: -100;
    margin-top: 3rem;
    justify-content: center;

    text-align: center;
  }
`
const PositionText = styled.div`
  justify-content: center;
  z-index: 2;
  margin-top: -40rem;
  width: 100%;
  align-items: center;
  text-align: center;
  padding-right: 4rem;
  padding-left: 4rem;

  & h1 {
    margin-top: 2rem;
  }
  & h2 {
    color: white;
    margin-bottom: 3rem;
    font-weight: bold;
    font-size: 3rem;
  }

  @media screen and (max-width: 1080px) {
    z-index: 2;
    width: 100%;
    align-items: center;
    text-align: center;
    padding-left: 0rem;
    padding-right: 0rem;

    & h2 {
      margin-top: 0rem;
      color: white;
      margin-bottom: 2rem;
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 400px) {
    justify-content: left;
    z-index: 2;
    margin-top: 8rem;
    width: fit-content;
    align-items: center;
    text-align: center;
    position: absolute;
    display: flex;
    & h2 {
      color: white;
      margin-bottom: 1rem;
      font-size: 1.4rem;
      padding-right: 0.2rem;
      padding-left: 0.2rem;
    }
  }
`
const ContentText = styled.div`
  padding-right: 4rem;
  padding-left: 4rem;
  @media screen and (max-width: 1080px) {
    padding-left: 0rem;
    padding-right: 0rem;
  }
  @media screen and (max-width: 400px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const UlSection = styled.ul`
  font-size: 1.4rem;

  padding: 0;
  text-align: center;
  align-items: center;

  @media screen and (max-width: 1080px) {
    columns: 2;
    font-size: 1.2rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (max-width: 400px) {
    padding: 0;
    text-align: left;
    align-items: left;
    columns: 1;
  }
`
const LiSection = styled.li`
  display: inline-flex;
  padding: 0.4rem;
  color: white;
  @media screen and (max-width: 1080px) {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    color: white;
    justify-content: left;
    text-align: left;
  }
  @media screen and (max-width: 400px) {
    margin-top: 0.5rem;
    padding-left: 0rem;
    color: white;
    font-size: 1rem;
    justify-content: left;
    text-align: left;
  }
`
const DivHability = styled.div`
  padding: 0;
  display: contents;
`
const ColButtonVideo = styled.div`
  margin-top: 3rem;
  @media screen and (max-width: 1080px) {
    margin-top: 1rem;
  }
`
