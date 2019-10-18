import React from 'react'
import styled from 'styled-components'
import { Button } from 'Common'
import { Link } from 'gatsby'
import Idea from 'Static/svgs/idea.svg'
import IdeaMeasure from 'Static/svgs/ideaMeasure.svg'
import Design from 'Static/svgs/design.svg'
import { colors, desktopMaxWidth, routes } from '../../../utils/constants'
import CardImage from '../../common/Cards/CardImage'
import SectionWrapper from '../../common/Layout/SectionWrapper'

const Center = styled.div`
	margin: 0 15vw;
	border-radius: 10px;
	margin-top: -30vh;
	background-color: white;
	padding: 5% 10%;

	h1 {
		color: ${colors.purple};
		text-align: center;
	}

	h1,
	p {
		padding: 3vh 0;
	}
`

const Cards = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 10vh 0;

	svg {
		height: 200px;
	}

	@media (max-width: ${desktopMaxWidth}) {
		justify-content: center;
	}
`

const Dev = styled.img`
	padding: 5vh 0;
`

const Proud = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

	a {
		text-align: center;
		width: 40%;
	}
`

const ProudImage = styled.div`
	flex: 1;
	padding-left: 5%;

	img {
		margin: 0;
		border-radius: 10px;
	}

	@media (max-width: ${desktopMaxWidth}) {
		padding: 10% 0;
	}
`

export const CenterBody = () => (
	<>
		<Center>
			<h1>
				Creamos los mejores <br /> productos digitales
			</h1>
			<p style={{ textAlign: 'justify' }}>
				En lugar de encerrar a nuestros clientes en contratos a largo plazo,
				hemos innovado un nuevo modelo de servicio en la forma de una
				suscripción de diseño de bajo compromiso y tarifa plana. Este enfoque
				adaptable nos permite evitar proyectos de alcance relleno, órdenes de
				cambio, facturación por hora, reuniones de alcance y otras distracciones
				típicas de la agencia.
			</p>
			<Cards>
				<CardImage
					image={<Idea />}
					title="Metodologías ágiles"
					description="Convertir tus ideas de negocio en realidad y mejorar su servicio."
				/>
				<CardImage
					image={<IdeaMeasure />}
					title="Equipo epecializado"
					description="Definir grandes visiones escalables a tu negocio."
				/>
				<CardImage
					image={<Design />}
					title="Comunicación efectiva"
					description="Nos conectamos directamente a su negocio y creamos proactivamente un plan de éxito personalizado."
				/>
			</Cards>

			<h1>
				Encofados en obtener <br />
				los mejores resultados
			</h1>
			<p style={{ textAlign: 'justify' }}>
				Somos una organización en la que cada uno de nuestros{' '}
				<strong>Cleverianos</strong> tienen el conocimiento, la habilidad, el
				deseo y la oportunidad de tener éxito personal, de manera que llegamos
				al éxito organizativo colectivo.
			</p>

			<Dev src="../illustrations/dev.svg" />

			<p style={{ textAlign: 'justify' }}>
				En <strong>Cleverit</strong> tenemos un entorno de trabajo orientado a
				resultados y una estrategia de gestión de personal en el trabajo, en la
				cual cada uno de los <strong>Cleverianos</strong> son retribuidos en
				función de los resultados en vez de las horas trabajadas.
			</p>
		</Center>

		<SectionWrapper innerJustify="space-between" backgroundURL="">
			<Proud>
				<h1>Orgullosos de nuestros resultados</h1>

				<p style={{ textAlign: 'justify' }}>
					Hoy nos encontramos orgullos de nuestros logros y nuestro trabajo
					ayudando a nuestro clientes, te invitamos a revisar algunos de
					nuestros proyectos más emblemticos.
				</p>

				<Button as={Link} to={routes.PROJECTS}>
					NUESTROS PROYECTOS
				</Button>
			</Proud>

			<ProudImage>
				<img src="../pngs/splash1.png" alt="veryProud" />
			</ProudImage>
		</SectionWrapper>
	</>
)
