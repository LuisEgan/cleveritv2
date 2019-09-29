import React from 'react'
import styled from 'styled-components'
import Idea from 'Static/svgs/idea.svg'
import IdeaMeasure from 'Static/svgs/ideaMeasure.svg'
import Design from 'Static/svgs/design.svg'
import PieChart from 'Static/svgs/pieChart.svg'
import CardImage from '../../common/Cards/CardImage'
import SectionWrapper from '../../common/Layout/SectionWrapper'

const flow = [
	{
		image: <Idea />,
		title: '¿Tienes una idea?',
		description:
			'Convertir tus ideas de negocio en realidad y mejorar su servicio.',
	},
	{
		image: <IdeaMeasure />,
		title: 'Medir idea',
		description: 'Definir grandes visiones escalables a tu negocio.',
	},
	{
		image: <Design />,
		title: 'Diseño de servicio',
		description:
			'Nos conectamos directamente a su negocio y creamos proactivamente un plan de éxito personalizado.',
	},
	{
		image: <PieChart />,
		title: 'Entrar al mercado',
		description:
			'Tu negocio centrado en el usuario para que tu proyecto sea rentable.',
	},
]

const Container = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;

	@media (min-width: 601px) {
		justify-content: space-between;

		> div {
			&:nth-child(2n) {
				margin-top: 8%;
			}
		}
	}
`

export const Workflow = () => (
	<SectionWrapper backgroundURL="">
		<Container>
			{flow.map(({ image, title, description }) => {
				return (
					<CardImage image={image} title={title} description={description} />
				)
			})}
		</Container>
	</SectionWrapper>
)
