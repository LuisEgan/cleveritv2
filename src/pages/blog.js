import React from "react"
import Layout from "../components/Common/Layout"
import { BlogsGrid } from "../components/Blog/BlogsGrid"

const Blog = () => {
  return (
    <Layout location="blog">
      <BlogsGrid />
    </Layout>
  )
}

export default Blog
