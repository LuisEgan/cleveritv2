import React from 'react'
import { Layout, SEO } from 'Common'
import { BlogsGrid } from '../components/blog'

const Blog = () => {
	return (
		<Layout>
			<SEO />
			<BlogsGrid />
		</Layout>
	)
}

export default Blog
