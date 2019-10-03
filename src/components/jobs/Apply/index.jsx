import React, { useState, useEffect } from 'react'
import SectionWrapper from '../../common/Layout/SectionWrapper'
import CardButton from '../../common/Cards/CardButton'
import {
	Container,
	TitleContainer,
	Title,
	ContentContainer,
	Card,
} from './styles'
import { useJobs } from '../../../hooks/useJobs'
import Filter from '../../common/Filter'
import { techs } from '../../../utils/constants'
import CardJob from '../../common/Cards/CardJob'

export const Apply = props => {
	const { title, description, btnText, btnIcon } = props

	const [tech, setTech] = useState('all')
	const [cards, setCards] = useState([])
	const [selectedJob, setSelectedJob] = useState()
	console.log('selectedJob: ', selectedJob)
	const jobs = useJobs(tech)
	console.log('jobs: ', jobs)

	useEffect(() => {
		const newCards = jobs.map(({ title, tech }) => {
			return {
				title,
				description: (
					<span>
						{tech} <br /> Santiago, Chile
					</span>
				),
			}
		})
		setCards(newCards)
	}, [tech])

	return (
		<Container as={SectionWrapper} backgroundURL="" innerHeight="70vh">
			<Filter
				options={['Todas', ...Object.keys(techs).map(t => techs[t])]}
				onSelect={selected => setTech(selected)}
			/>
			<TitleContainer>
				<Title>Conviérte en Clevenger</Title>

				<p>
					En Cleverit nos enfocamos en obtener los mejores resultados, para esto
					necesitamos gente como tú
				</p>
			</TitleContainer>

			{!selectedJob ? (
				<ContentContainer>
					{cards.map(({ title, description }) => {
						return (
							<Card
								key={title}
								as={CardButton}
								title={title}
								description={description}
								onClick={() =>
									setSelectedJob(jobs.find(j => j.title === title))
								}
							/>
						)
					})}
				</ContentContainer>
			) : (
				<ContentContainer>
					<CardJob {...selectedJob} />
				</ContentContainer>
			)}
		</Container>
	)
}
