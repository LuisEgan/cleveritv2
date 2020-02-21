import React, { useState } from "react"

import { Row, Col, Button, Card } from "react-bootstrap"
import usePost from "../../hooks/usePost"

import { connect } from "react-redux"
import { getData } from "../../utils/page.js"
import Image from "gatsby-image"
import styled from "styled-components"
import mobileMaxWidth from "../../utils/page"
import { ReadLink } from "../../components/Blog/ReadLink"

const { Body, Title, Text } = Card

let Blog = props => {
  const [visible, setVisible] = useState(3)
  const posts = usePost()
  const {
    app: { lang },
    location,
  } = props

  const content = getData(location, lang)

  const BlogImage = styled(Image)`
    margin-top: 0;
    padding: 0;
    position: relative;
    overflow: hidden;
    height: 200px;

    @media (min-width: ${mobileMaxWidth}) {
      height: 400px;
    }
  `

  const loadMore = () => {
    setVisible(visible + 3)
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
          style={{ textAlign: 'center' }}
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
          {posts.slice(0, visible).map((post, index) => {
            return (
              <div
                className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 item-carousel"
                key={index}
              >
                <Card style={{ width: "100%" }}>
                  <div className="inner">
                    <BlogImage
                      fluid={post.image.sharp.fluid}
                      alt={post.title}
                    />
                  </div>
                  <Body className="card-body-portfolio">
                    <Title>{post.title}</Title>
                    <Text>{post.excerpt.slice(0, 60)+'...'}</Text>
                    <Text className="area-text-home">{post.tag}</Text>
                    <ReadLink to={`/blog/${post.slug}`}>
                      {content.sectionBlog.common.seeMore} &rarr;{" "}
                    </ReadLink>
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
        {visible < posts.length && (
          <Button onClick={() => loadMore()} className="btn-loadMore-home">
            {" "}
            {content.sectionBlog.common.loadMore}
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

Blog = connect(mapStateToProps, mapDispatchToProps)(Blog)
export default Blog
