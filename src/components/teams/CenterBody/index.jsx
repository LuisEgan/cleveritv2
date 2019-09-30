import React from 'react'
import styled from 'styled-components'
import { Button } from 'Common'
import Idea from 'Static/svgs/idea.svg'
import IdeaMeasure from 'Static/svgs/ideaMeasure.svg'
import Design from 'Static/svgs/design.svg'
import { colors, desktopMaxWidth } from '../../../utils/constants'
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
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
				quod quidem? Rerum magnam aliquam est? At deleniti perspiciatis
				voluptate, necessitatibus tempore quis, tempora impedit ducimus
				quibusdam obcaecati, iusto omnis a.
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
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
				quod quidem? Rerum magnam aliquam est? At deleniti perspiciatis
				voluptate, necessitatibus tempore quis, tempora impedit ducimus
				quibusdam obcaecati, iusto omnis a.
			</p>

			<Dev src="../illustrations/dev.svg" />

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
				quod quidem? Rerum magnam aliquam est? At deleniti perspiciatis
				voluptate, necessitatibus tempore quis, tempora impedit ducimus
				quibusdam obcaecati, iusto omnis a.
			</p>
		</Center>

		<SectionWrapper innerJustify="space-between">
			<Proud>
				<h1>Orgullosos de nuestros resultados</h1>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
					labore sequi illo consequatur maiores cumque aliquam delectus rem.
					Magni ab ratione aut at nihil hic, alias dolorem blanditiis sint
					illum.
				</p>

				<Button as={Button}>NUESTROS PROYECTOS</Button>
			</Proud>

			<ProudImage>
				<img src="../jpgs/programmer-bg.jpg" alt="veryProud" />
			</ProudImage>
		</SectionWrapper>
	</>
)
