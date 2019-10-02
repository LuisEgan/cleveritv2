import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Details } from './styles'
import usePost from '../../../hooks/usePosts'
import { CardBlog } from '../../../components/common/Cards/CardBlog'
import SectionWrapper from '../../common/Layout/SectionWrapper'
import { colors } from '../../../utils/constants'

export const Header = styled.div`
	display: flex;

	h2 {
		font-size: 33pt;
		flex: 1;
	}
`

export const Body = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`

export const StyledLink = styled(Link)`
	cursor: pointer;
	border-radius: 9px;
	padding: 1.1rem 2.5rem;
	border: none;
	-webkit-appearance: none;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	color: #fff;
	background: ${colors.purple};
	height: 25px;

	&:focus {
		outline: none;
	}

	&:disabled {
		background: gray;
	}

	${({ secondary }) =>
		secondary &&
		`
		background: #001F3F;
	`}
`

export const Blog = () => {
	const posts = usePost()
	return (
		<SectionWrapper backgroundURL="">
			<Details>
				<Header>
					<h2> Materíal para digerir</h2>
					<StyledLink to="/blog">Ir al blog </StyledLink>
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
