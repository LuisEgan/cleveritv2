import React from 'react'
import styled from 'styled-components'
import { Button } from 'Common'
import { Link } from 'gatsby'
import SectionWrapper from '../../common/Layout/SectionWrapper'
import { fontSizes, routes } from '../../../utils/constants'

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

const Title = styled.span`
	font-size: ${fontSizes.bigger};
	font-weight: bold;
	color: white;
`

const StyledButton = styled(Button)`
	background-color: transparent;
	border: 2px solid white;
	margin-top: 3vh;
	text-align: center;
`

export const JoinUs = () => (
	<SectionWrapper
		backgroundURL="../jpgs/programmer-bg.jpg"
		backgroundSize="cover"
		innerJustify="space-between"
	>
		<Container>
			<Title>
				¿Qué esperas? <br />
				Únete a nuestro equipo
			</Title>

			<StyledButton as={Link} to={routes.JOBS}>
				POSTULA AHORA
			</StyledButton>
		</Container>

		<div />
	</SectionWrapper>
)
