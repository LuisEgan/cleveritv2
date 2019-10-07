import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import styled from 'styled-components'
import { Layout } from '../components/common/Layout/index'
import { Container } from '../components/common/Container'
import { ReadLink } from '../components/blog'

export const query = graphql`
	query($slug: String!) {
		mdx(frontmatter: { slug: { eq: $slug } }) {
			frontmatter {
				title
				author
			}
			body
		}
	}
`

export const BlogContainer = styled(Container)`
	text-align: justify;
	width: 60% !important;

	@media only screen and (max-width: 768px) {
		width: 80% !important;
	}
`

const PostTemplate = ({ data: { mdx: post } }) => {
	const disqusConfig = {
		url: `https://cleverit.cl/${post.slug}`,
		identifier: post.slug,
		title: post.title,
	}
	return (
		<Layout>
			<BlogContainer>
				<h1>{post.frontmatter.title}</h1>
				<p>Posted by ({post.frontmatter.author})</p>
				<CommentCount config={disqusConfig} placeholder="..." />
				<MDXRenderer>{post.body}</MDXRenderer>
				<Disqus config={disqusConfig} />
				<ReadLink to="/">&larr; volver al resto de posts</ReadLink>
			</BlogContainer>
		</Layout>
	)
}
export default PostTemplate
