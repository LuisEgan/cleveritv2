import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
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

const PostTemplate = ({ data: { mdx: post } }) => {
	const disqusConfig = {
		url: `https://cleverit.cl/${location.pathname}`,
		identifier: post.slug,
		title: post.title,
	}
	return (
		<Layout>
			<Container>
				<h1>{post.frontmatter.title}</h1>
				<p>Posted by ({post.frontmatter.author})</p>
				<CommentCount config={disqusConfig} placeholder="..." />
				<MDXRenderer>{post.body}</MDXRenderer>
				<Disqus config={disqusConfig} />
				<ReadLink to="/">&larr; volver al resto de posts</ReadLink>
			</Container>
		</Layout>
	)
}
export default PostTemplate
