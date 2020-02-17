import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Common/Layout"
import ReadLink from "../components/Blog/ReadLink"
import BlogContainer from "../components/Blog/BlogContainer"
import ModalForm from "../components/Common/ModalForm"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        slug
      }
      body
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => {
  const disqusConfig = {
    url: `https://www.cleveritgroup.com/blog/${post.frontmatter.slug}`,
    identifier: post.frontmatter.slug,
    title: post.frontmatter.title,
  }
  return (
    <Layout location="blog">
      <ModalForm />
      <BlogContainer>
        <CommentCount config={disqusConfig} placeholder="..." />
        <p>Posted by ({post.frontmatter.author})</p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <Disqus config={disqusConfig} />
        <ReadLink to="/blog">&larr; volver al resto de posts</ReadLink>
      </BlogContainer>
    </Layout>
  )
}
export default PostTemplate
