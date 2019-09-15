import React, { useState } from 'react'

import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import { Input } from '../components/common/Input'
import { TextArea } from '../components/common/TextArea'

const ImageBackground = styled(BackgroundImage)`
	background-position: top 20% center;
	background-size: cover;
	height: 100vh;
	+ * {
		margin-top: 0;
	}
`

const DivContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: row wrap;
	font-weight: bold;
	text-align: center;
	padding: 4%;
`

const DivCont = styled.div`
	display: flex;
	width: 40%;
	flex-flow: column;
`
const H1Cont = styled.h1`
	text-align: left;
	font-weight: bold;
	font-family: Cochin;
	letter-spacing: 0px;
	color: rgb(0, 0, 0);
	opacity: 1;
`

const PCont = styled.p`
	text-align: left;
	letter-spacing: 0px;
	color: rgb(0, 0, 0);
	opacity: 1;
`

const Contact = () => {
	const [nombre, setNombre] = useState('')
	const [correo, setCorreo] = useState('')
	const [comentario, setComentario] = useState('')

	const { image } = useStaticQuery(graphql`
		query {
			image: file(relativePath: { eq: "contact.jpg" }) {
				sharp: childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`)

	return (
		<ImageBackground Tag="section" fluid={image.sharp.fluid}>
			<DivContent>
				<DivCont>
					<H1Cont>¿Tienes alguna pregunta?</H1Cont>
					<PCont>
						Estamos felices de responder tus dudas. Llena el formulario y
						estaremos en contacto lo más pronto posible
					</PCont>
					<Input
						onChangeText={str => setNombre(str)}
						value={nombre}
						placeholder="Nombre y apellido"
					/>

					<Input
						onChangeText={str => setCorreo(str)}
						value={correo}
						placeholder="correo"
					/>

					<TextArea
						value={comentario}
						onChange={str => setComentario(str)}
						placeholder="comentario"
					/>

					<div
						style={{
							display: 'flex',
							justifyContent: 'flex-end',
						}}
					>
						<button
							style={{
								right: 0,
								left: 0,
								width: '121px',
								height: '31px',
								color: '#fff',
								background: '#371A9F 0% 0% no-repeat padding-box',
								borderRadius: '4px',
								opacity: 1,
							}}
							type="button"
						>
							enviar
						</button>
					</div>
				</DivCont>
			</DivContent>
		</ImageBackground>
	)
}

export default Contact
