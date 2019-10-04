import React, { useState } from 'react'
import styled from 'styled-components'
import { mobileMaxWidth, techs } from '../../../utils/constants'
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

export const BlogsGrid = props => {
	const [topic, setTopic] = useState('all')
	const posts = usePosts(topic)

	return (
		<Container backgroundURL="">
			<Filter
				options={['Todas', ...Object.keys(techs).map(t => techs[t])]}
				onSelect={selected => setTopic(selected)}
			/>

			{posts.map(post => (
				<CardBlog key={post.slug} post={post} />
			))}
		</Container>
	)
}
