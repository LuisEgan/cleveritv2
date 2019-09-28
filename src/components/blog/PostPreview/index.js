import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const ArticlePreview = styled.article`
	border-bottom: 1px solid #ddd;
	display: flex;
	margin-top: 0;
	padding-bottom: 1rem;

	:first-of-type {
		margin-top: 1rem;
	}
`

export const LinkPreview = styled(Link)`
	margin: 1rem 1rem 0 0;
	width: 100px;
`

export const ImagePreview = styled(Image)`
	* {
		margin-top: 0;
	}
`

export const DivPreview = styled.div`
	margin-top: 1rem;
`

export const ReadLink = styled(Link)`
	display: inline-block;
	font-size: 0.875rem;
`

export const PostPreview = ({ post }) => {
	return (
		<ArticlePreview>
			<LinkPreview to={post.slug}>
				<ImagePreview fluid={post.image.sharp.fluid} alt={post.title} />
			</LinkPreview>
			<DivPreview>
				<p>{post.excerpt}</p>
				<ReadLink to={post.slug}>Read this post &rarr; </ReadLink>
			</DivPreview>
		</ArticlePreview>
	)
}

export default PostPreview
