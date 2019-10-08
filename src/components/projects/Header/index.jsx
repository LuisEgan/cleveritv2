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

			<p style={{ textAlign: 'center' }}>
				Nos motiva enfrentar los desafíos de transformación digital. Somos
				innovadores y aplicamos tecnología de punta para desarrollar software
				que agiliza la dinámica digital y agrega ventajas competitivas a
				nuestros clientes.
			</p>
		</Container>
	)
}
