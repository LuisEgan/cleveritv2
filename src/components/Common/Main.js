import React from "react";
import data from "../../data/content.json";
import { connect } from "react-redux";
import { Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import AnimationHome from "../Animations/AnimationHome";
import AnimationUx from "../Animations/AnimationUx";
import AnimationAgile from "../Animations/AnimationAgile";
import AnimationDev from "../Animations/AnimationDev";
import AnimationDevOps from "../Animations/AnimationDevOps";
import AnimationQa from "../Animations/AnimationQa";

let Main = props => {
  const {
    app: { lang },
    location
  } = props;
  let content;
  let animation;
  let color;

  switch (location) {
    case "development":
      content = data.Development[lang];
      color = "#10ddc2";
      animation = <AnimationDev></AnimationDev>;
      break;
    case "qa":
      content = data.QA[lang];
      color = "#0bc075";
      animation = <AnimationQa></AnimationQa>;
      break;
    case "agile":
      content = data.Agile[lang];
      color = "#faa03a";
      animation = <AnimationAgile></AnimationAgile>;
      break;
    case "ux":
      content = data.UX[lang];
      animation = <AnimationUx></AnimationUx>;
      color = "#7e0cf5";
      break;
    case "devops":
      content = data.DevOps[lang];
      color = "#eb6178";
      animation = <AnimationDevOps></AnimationDevOps>;
      break;
    default:
      content = data.Home[lang];
      animation = <AnimationHome></AnimationHome>;
      color = "#371a9f";
      break;
  }
  const BtnTalk = styled.button`
    background-color: ${color};
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
      background-color: ${color} !important;
      border-color: ${color} !important;
    }
  `;
  return (
    <>
      <RowMain className="row">
        <TextTitle
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          className={`visible col-xl-6 col-lg-6 col-sm-12 col-md-12 col-xs-12`}
        >
          <h1>{content.sectionMain.mainTitle}</h1>
          <br></br>
          <p>{content.sectionMain.mainText}</p>
          <BtnTalk id="btnTalk" onClick={() => props.showModalFunc(true)}>
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
  );
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    changeLang: lang => dispatch({ type: "SET_LANGUAGE", payload: lang }),
    showModalFunc: show => dispatch({ type: "SHOW_MODAL", payload: show })
  };
};

Main = connect(mapStateToProps, mapDispatchToProps)(Main);
export default Main;

const TextTitle = styled.div`
  padding: 5rem;
  @media screen and (max-width: 1080px) {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 3rem;
  }

  @media screen and (max-width: 400px) {
    padding-left: 2rem;
    padding-top: 0rem;
    & p {
      font-size: 1rem;
    }
  }
`;
const RowMain = styled.div`
  margin-left: auto;
  margin-right: auto;
  & h1 {
    font-size: 4rem;
    text-align: left;
    justify-content: left;
    font-weight: bold;
  }
  & p {
    font-size: 1.5rem;
    text-align: left;
    justify-content: left;
  }
  @media screen and (max-width: 1080px) {
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
`;
const HomeImg = styled.div`
  justify-content: center;
  text-align: center;
  padding-left: 6%;
  padding-right: 6%;
  margin-left: auto;
  margin-right: auto;
`;