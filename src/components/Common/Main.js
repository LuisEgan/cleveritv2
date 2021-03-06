import React from "react"
import { getData, getAnimation, getSuiteColor } from "../../utils/page"
import { connect } from "react-redux"
import styled from "styled-components"

let Main = props => {
  const {
    app: { lang },
    location,
  } = props

  const content = getData(location, lang)
  const animation = getAnimation(location)
  const color = getSuiteColor(location)

  return (
    <>
      <RowMain className="row mobileImageIcon testingPls">
        <TextTitle
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className={`visible col-xl-6 col-lg-6 col-sm-12 col-md-12 col-xs-12`}
          style={{ padding: '3rem' }}
        >
          <h1>{content.sectionMain.mainTitle}</h1>
          <br></br>
          <p>{content.sectionMain.mainText}</p>
          <BtnTalk style={{ backgroundColor: `${color} !important` }} id="btnTalk" onClick={() => props.showModalFunc(true)} inputColor={color}>
            {content.sectionMain.button}
          </BtnTalk>
        </TextTitle>

        <HomeImg
          xs={10}
          sm={10}
          md={10}
          lg={6}
          xl={6}
          className={`align-self-center visible col-xl-6 col-lg-6 col-md-10 col-sm-10 col-xs-10 `}
        >
          {animation}
        </HomeImg>
      </RowMain>
    </>
  )
}

const RowMain = styled.div`
  margin-left: auto;
  margin-right: auto;
  && h1 {
    font-size: 4rem;
    text-align: left;
    justify-content: left;
    font-weight: bold;
  }
  && p {
    font-size: 1.5rem;
    text-align: left;
    justify-content: left;
  }
  @media screen and (max-width: 1080px) {
    && h1 {
      font-size: 2rem;
      text-align: left;
      justify-content: left;
    }
    && p {
      font-size: 1.2rem;
      text-align: left;
      justify-content: left;
    }
  }
  @media screen and (max-width: 400px) {
    & h1 {
      font-size: 2rem;
      text-align: left;
      justify-content: left;
    }
    & p {
      font-size: 1.2rem;
      text-align: left;
      justify-content: left;
    }
  }
`
const HomeImg = styled.div`
  justify-content: center;
  text-align: center;
  padding-left: 4%;
  padding-right: 4%;
  margin-left: auto;
  margin-right: auto;
`

const BtnTalk = styled.button`
  background-color: ${props => props.inputColor} !important;
  text-align: center;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 1rem;
  cursor: pointer;
  border-width: 0px;
  margin-top: 2rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: white;
  :hover,
  :focus,
  :visited:active {
    background-color: ${props => props.inputColor} !important;
    border-color: ${props => props.inputColor} !important;
  }
`

const TextTitle = styled.div`
  padding: 5rem;
  @media screen and (max-width: 1080px) {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 3rem;
  }

  @media screen and (max-width: 400px) {
    padding: 0 2rem 2rem !important;
    & h1{
      font-size: 1.5rem !important;
      margin-bottom: 0 !important;
    }
    & p {
      font-size: 1rem !important;
    }
  }
`

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    changeLang: lang => dispatch({ type: "SET_LANGUAGE", payload: lang }),
    showModalFunc: show => dispatch({ type: "SHOW_MODAL", payload: show }),
  }
}

Main = connect(mapStateToProps, mapDispatchToProps)(Main)

export default Main
