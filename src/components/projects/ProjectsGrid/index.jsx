import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import CardImage from '../../common/Cards/CardImage'
import { mobileMaxWidth, projects } from '../../../utils/constants'

const descAlign = 'left'
const titleAlign = 'flex-start'

const Container = styled.div`
	padding-top: 10vh;
	margin: 0 5vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	a {
		width: 40%;
		min-width: 200px;
	}

	@media (min-width: ${mobileMaxWidth}) {
		justify-content: space-between;
	}
`

export const ProjectsGrid = props => {
	return (
		<Container>
			{projects.map(project => {
				return (
					<Link to={project.path} key={project.title}>
						<CardImage
							{...project}
							width="100%"
							descAlign={descAlign}
							titleAlign={titleAlign}
						/>
					</Link>
				)
			})}
		</Container>
	)
}
