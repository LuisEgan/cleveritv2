import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import SectionWrapper from '../../common/Layout/SectionWrapper'
import { colors } from '../../../utils/constants'
import { useProjectFalabella } from '../../../hooks/projects/useProjects'

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

export const Projects = () => {
	const projects = useProjectFalabella()
	console.log('projects: ', projects)
	return <SectionWrapper backgroundURL="">:p</SectionWrapper>
}

export default Projects
