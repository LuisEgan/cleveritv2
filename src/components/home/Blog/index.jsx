import React from 'react'
import { Container } from 'Common'
import { Wrapper, Details } from './styles'
import usePost from '../../../hooks/use-posts'
import { PostPreview } from '../../../components/blog'

export const Blog = () => {
	const posts = usePost()
	return (
		<Wrapper as={Container} id="contact">
			<Details>
				<h2> Materíal para digerir</h2>
				{posts.map(post => (
					<PostPreview key={post.slug} post={post} />
				))}
			</Details>
		</Wrapper>
	)
}

export default Blog
