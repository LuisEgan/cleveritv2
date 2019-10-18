import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import CardImage from '../../common/Cards/CardImage'
import { projects, mobileMaxWidth } from '../../../utils/constants'
import SectionWrapper from '../../common/Layout/SectionWrapper'

const descAlign = 'left'
const titleAlign = 'flex-start'

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;

	a {
		width: 40%;
		min-width: 200px;
	}

	@media (max-width: ${mobileMaxWidth}) {
		justify-content: center;
	}
`

export const ProjectsGrid = props => {
	return (
		<Container as={SectionWrapper}>
			{projects.map(project => {
				return (
					<Link to={project.path} key={project.title}>
						<CardImage
							{...project}
							width="100%"
							descAlign={descAlign}
							titleAlign={titleAlign}
							thumbnail={false}
						/>
					</Link>
				)
			})}
		</Container>
	)
}
