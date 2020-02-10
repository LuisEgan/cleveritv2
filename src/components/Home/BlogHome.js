import React from "react";

import { Row, Col, Button, Card } from "react-bootstrap";
import data from "../../data/content.json";

import { connect } from "react-redux";

const { Body, Title, Text } = Card;

class BlogHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: 3,
      data
    };
  }

  loadMore = () => {
    this.setState(old => {
      return { visible: old.visible + 2 };
    });
  };

  render() {
    return (
      <>
        <Row
          className={` justify-content-center text-porfolio ${this.props.classAnimationPortfolio} `}
        >
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            className={`${this.props.classAnimationPortfolio} `}
          >
            <h1 className="portfolio-title">
              {data.Home[this.props.app.lang].sectionBlog.blogTitle}
            </h1>
          </Col>
        </Row>
        <Row
          className={` justify-content-center ${this.props.classAnimationPortfolio} `}
        >
          <Col
            xs={12}
            sm={10}
            md={8}
            lg={10}
            xl={8}
            className="align-self-center col-blog-cards"
          >
            {data.Home[this.props.app.lang].sectionBlog.blogList
              .slice(0, this.state.visible)
              .map((card, index) => {
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
                );
              })}
          </Col>
        </Row>
        <Row
          className={`  justify-content-center ${this.props.classAnimationPortfolio} `}
        >
          {this.state.visible <
            data.Home[this.props.app.lang].sectionBlog.blogList.length && (
            <Button
              onClick={() => this.loadMore()}
              className="btn-loadMore-home"
            >
              {" "}
              Cargar más
            </Button>
          )}
        </Row>
      </>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    changeLang: lang => dispatch({ type: "SET_LANGUAGE", payload: lang })
  };
};

BlogHome = connect(mapStateToProps, mapDispatchToProps)(BlogHome);
export default BlogHome;
