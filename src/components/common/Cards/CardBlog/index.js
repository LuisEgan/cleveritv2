import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { ReadLink } from '../../../../components/blog'

export const ArticleWrapper = styled.article`
	display: flex;
	margin-top: 0;
	flex-direction: column;
	justify-content: space-evenly;
	margin: 1rem;
	max-width: 30vw;
`

export const StyledLink = styled(Link)`
	width: 100%;
	height: 100%;

	img {
		border-radius: 5px;
	}
`

export const StyledImage = styled(Image)`
	margin-top: 0;
	padding: 0;
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

export const CardBlog = ({ post }) => {
	return (
		<ArticleWrapper>
			<StyledLink to={post.slug}>
				<StyledImage fluid={post.image.sharp.fluid} alt={post.title} />
			</StyledLink>
			<Description>
				<p>
					{post.author} | {post.creationDate} | {post.tag}
				</p>
			</Description>
			<Container>
				<p>{post.excerpt}</p>
				<ReadLink to={post.slug}>Ver más &rarr; </ReadLink>
			</Container>
		</ArticleWrapper>
	)
}

export default CardBlog
