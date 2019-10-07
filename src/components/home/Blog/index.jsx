import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from '../../../components/common'
import { Details } from './styles'
import usePost from '../../../hooks/usePosts'
import { CardBlog } from '../../../components/common/Cards/CardBlog'
import SectionWrapper from '../../common/Layout/SectionWrapper'
import { routes, mobileMaxWidth } from '../../../utils/constants'

export const Header = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;

	h2 {
		font-size: 33pt;
	}
	@media only screen and (max-width: 768px) {
		flex-wrap: wrap;
	}
`

export const Body = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	img {
		max-width: 349px;
	}

	@media only screen and (max-width: 768px) {
		flex-wrap: wrap;
	}
`

export const Blog = () => {
	const posts = usePost()
	return (
		<SectionWrapper backgroundURL="">
			<Details>
				<Header>
					<h2> Materíal para digerir</h2>
					<Button as={Link} to={routes.BLOG}>
						Ir al blog{' '}
					</Button>
				</Header>
				<Body>
					{posts.map(post => (
						<CardBlog key={post.slug} post={post} />
					))}
				</Body>
			</Details>
		</SectionWrapper>
	)
}

export default Blog
