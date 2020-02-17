import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { blogTopics } from "../../utils/page"
import usePosts from "../../hooks/usePost"
import CardBlog from "../../components/Blog/CardBlog"
import Filter from "../../components/Common/Filter"
import BlogContainer from "../../components/Blog/BlogContainer"

const Container = styled.div`
  padding-top: 12vh !important;
  display: flex !important;
  flex-wrap: wrap !important;

  a {
    margin: 0;
    min-width: 200px;
  }
`

export const BlogsGrid = () => {
  const [topic, setTopic] = useState("all")
  const [blogPost, setBlogPost] = useState([])
  const posts = usePosts(topic)

  useEffect(() => {
    const filteredPost = posts.filter(post => {
      if (topic === "all") return post
      return post.tag === topic
    })
    setBlogPost(filteredPost)
  }, [topic])

  return (
    <Container as={BlogContainer}>
      <Filter
        options={["Todas", ...Object.keys(blogTopics).map(t => blogTopics[t])]}
        onSelect={selected => setTopic(selected)}
      />

      {blogPost.map(post => (
        <CardBlog key={post.slug} post={post} />
      ))}
    </Container>
  )
}
