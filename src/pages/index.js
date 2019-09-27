import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact } from 'Components/landing'
import usePosts from '../hooks/use-posts'
import PostPreview from '../components/blog/post-preview'

export default () => {
	const posts = usePosts()
	console.log('TCL: posts', posts)
	return (
		<Layout>
			<SEO />
			<Intro />
			<Skills />
			<h2> Material para digerir</h2>
			{posts.map(post => (
				<PostPreview key={post.slug} post={post} />
			))}
			<Contact />
		</Layout>
	)
}
