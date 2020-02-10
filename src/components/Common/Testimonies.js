import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Carousel, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { getData } from "../../utils/page";

let Testimonies = props => {
  const {
    app: { lang },
    location
  } = props;

  const content = getData(location, lang);

  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const widthScreen = window.innerWidth;

  const testimonyArray = chunk(
    content.sectionPlan.testimonyList,
    widthScreen < 1000 ? 1 : 3
  );

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
                    with: "100%"
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
                          <Card.Title className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">{planDescription.name}</Card.Title>
                          <Card.Subtitle className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">{planDescription.ocupation}</Card.Subtitle>
                        </RowTestimony>
                        <RowTestimony>
                        <Card.Text>{planDescription.testimony}</Card.Text>
                        </RowTestimony>
                        </Card.Body>
                        </Card>
                        
                      </CountainerText>
                    );
                  })}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </>
      </RowPlan>
    </>
  );
};
const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    changeLang: lang => dispatch({ type: "SET_LANGUAGE", payload: lang })
  };
};

Testimonies = connect(mapStateToProps, mapDispatchToProps)(Testimonies);
export default Testimonies;

const CarouselTestimony = {
  textAlign: "center"
};

const RowPlan = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-left: 0rem;
  @media screen and (max-width: 1000px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const RowTestimony = styled.div`
  .card-subtitle {
    margin-bottom:1rem;
  }
`;
const CountainerText = styled.div`
  /*  display: flex;
  flex-direction: column; */
  max-width: 32%;
  @media screen and (max-width: 1000px) {
    padding-right: 1rem;
    padding-left: 1rem;
    margin-right: auto;
    margin-left: auto;
    max-width: 100%;
    width: 100%;
    & h4 {
      font-size: 1.2rem;
    }
  }
`;
