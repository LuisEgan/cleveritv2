import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import image1 from 'Static/pngs/image1.png'
import image2 from 'Static/pngs/image2.png'
import whyx from 'Static/pngs/whtx_init.png'
import CardImage from '../../common/Cards/CardImage'
import { desktopMaxWidth, mobileMaxWidth } from '../../../utils/constants'

const width = '40%'
const height = 600
const descAlign = 'left'
const titleAlign = 'flex-start'

const projects = [
	{
		image: <img src={image1} />,
		title: 'Falabella',
		description:
			'Nos conectamos directamente a su negocio y creamos proactivamente un plan de éxito personalizado.',
	},
	{
		image: <img src={image2} />,
		title: 'WOM',
		description:
			'Nos conectamos directamente a su negocio y creamos proactivamente un plan de éxito personalizado.',
	},
	{
		image: <img src={whyx} />,
		title: 'Cencosud',
		description:
			'Nos conectamos directamente a su negocio y creamos proactivamente un plan de éxito personalizado.',
	},
	{
		image: <img src={image1} />,
		title: 'Why X',
		description:
			'Nos conectamos directamente a su negocio y creamos proactivamente un plan de éxito personalizado.',
	},
]

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
					<Link to="/" key={project.title}>
						<CardImage
							{...project}
							width="100%"
							// height={`${height}px`}
							descAlign={descAlign}
							titleAlign={titleAlign}
						/>
					</Link>
				)
			})}
		</Container>
	)
}
