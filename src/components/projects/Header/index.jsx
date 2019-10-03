import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../utils/constants'

const Container = styled.div`
	padding-top: 20vh;
	text-align: center;
	margin: 0 15vw;

	h1 {
		color: ${colors.purple};
	}
`

export const Header = props => {
	return (
		<Container>
			<h1>Las grandes relaciones producen grandes resultados</h1>

			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
				adipisci et similique, reprehenderit nemo minus ab incidunt dolore quod
				laboriosam dolor tenetur optio modi, dolorum aliquid excepturi beatae.
				Iure, cum?
			</p>
		</Container>
	)
}
