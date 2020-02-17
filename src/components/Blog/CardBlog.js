import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styled from "styled-components"
import { ReadLink } from "./ReadLink"
import { mobileMaxWidth } from "../../utils/page"

export const ArticleWrapper = styled.article`
  display: flex;
  margin-top: 0;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 1rem 0;
  max-width: 38vw;
  min-width: 250px;
  padding: 15px;
  ${props => {
    const { maxWidth } = props
    let styles = ``

    if (maxWidth) {
      styles += `max-width: ${maxWidth};`
    }
    return styles
  }};
`

export const StyledLink = styled(Link)`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;

  img {
    border-radius: 5px;
  }

  @media (min-width: ${mobileMaxWidth}) {
    height: 400px;
  }
`

export const StyledImage = styled(Image)`
  margin-top: 0;
  padding: 0;
  position: relative;
  overflow: hidden;
  height: 200px;

  @media (min-width: ${mobileMaxWidth}) {
    height: 400px;
  }
`

export const Container = styled.div`
  margin-top: 1rem;
  text-align: left;
  letter-spacing: 0;
  color: #000000;
  opacity: 1;
`

export const Description = styled.div`
  display: flex;
  margin-top: 1rem;
  text-align: left;
  letter-spacing: 0;
  color: #545454;
  opacity: 1;
`

export const CardBlog = ({ post, maxWidth }) => {
  return (
    post &&
    post.image && (
      <ArticleWrapper maxWidth={maxWidth}>
        <StyledLink to={`blog/${post.slug}`}>
          <StyledImage fluid={post.image.sharp.fluid} alt={post.title} />
        </StyledLink>
        <Description>
          <p>
            {post.author} | {post.creationDate} | {post.tag}
          </p>
        </Description>
        <Container>
          <p>{post.excerpt}</p>
          <ReadLink to={`blog/${post.slug}`}>Ver más &rarr; </ReadLink>
        </Container>
      </ArticleWrapper>
    )
  )
}

export default CardBlog
