import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { mobileMaxWidth, blogTopics } from '../../../utils/constants'
import usePosts from '../../../hooks/usePosts'
import CardBlog from '../../common/Cards/CardBlog'
import Filter from '../../common/Filter'

const Container = styled.div`
	padding-top: 20vh;
	margin: 0 15vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	a {
		margin: 0;
		min-width: 200px;
	}

	@media (min-width: ${mobileMaxWidth}) {
		justify-content: space-between;
	}
`

export const BlogsGrid = () => {
	const [topic, setTopic] = useState('all')
	const [blogPost, setBlogPost] = useState([])
	const posts = usePosts(topic)

	useEffect(() => {
		const filteredPost = posts.filter(post => {
			if (topic === 'all') return post
			return post.tag === topic
		})
		setBlogPost(filteredPost)
	}, [topic])

	return (
		<Container backgroundURL="">
			<Filter
				options={['Todas', ...Object.keys(blogTopics).map(t => blogTopics[t])]}
				onSelect={selected => setTopic(selected)}
			/>

			{blogPost.map(post => (
				<CardBlog key={post.slug} post={post} />
			))}
		</Container>
	)
}
