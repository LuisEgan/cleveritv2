import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { mobileMaxWidth, blogTopics } from '../../../utils/constants'
import usePosts from '../../../hooks/usePosts'
import CardBlog from '../../common/Cards/CardBlog'
import Filter from '../../common/Filter'
import SectionWrapper from '../../common/Layout/SectionWrapper'

const Container = styled.div`
	padding-top: 10vh;
	display: flex;
	flex-wrap: wrap;

	a {
		margin: 0;
		min-width: 200px;
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
		<Container
			as={SectionWrapper}
			backgroundURL=""
			innerJustify="space-between"
		>
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
