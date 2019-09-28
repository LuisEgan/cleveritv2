import React from 'react'
import styled from 'styled-components'
import { Button as CommonButton } from 'Common'
import SectionWrapper from '../../common/Layout/SectionWrapper'
import { fontSizes } from '../../../utils/constants'

const Container = styled.div`
	display: flex;
	flex-direction: column;
`

const Title = styled.span`
	font-size: ${fontSizes.bigger};
	font-weight: bold;
	color: white;
`

const Button = styled.button`
	background-color: transparent;
	border: 2px solid white;
	margin-top: 3vh;
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

			<Button as={CommonButton}>POSTULA AHORA</Button>
		</Container>

		<div />
	</SectionWrapper>
)
