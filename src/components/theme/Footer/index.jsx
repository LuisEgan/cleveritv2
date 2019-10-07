import React from 'react'
import { Container } from 'Common'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Wrapper, Flex, Details } from './styles'
// import social from './social.json'

export const DetailsFooter = styled(Details)`
	display: flex;
	align-content: flex-end;
	flex-direction: column;
	padding-top: 2rem;

	p {
		margin-bottom: 0;
	}
`

export const Footer = () => (
	<Wrapper>
		<Flex as={Container}>
			<Details>
				<h2>Cleverit</h2>
				<span>© {new Date().getFullYear()}</span>
			</Details>

			<DetailsFooter>
				<p>
					✈️Av Los Militares 6191, OF. 21 Las Condes, Santiago -{' '}
					<strong>Chile</strong>
				</p>
				<p>📞+56 227170386</p>
			</DetailsFooter>
			{/* <Links>
				{social.map(({ id, name, link, icon }) => (
					<a
						key={id}
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`follow me on ${icon}`}
					>
						<img width="24" src={icon} alt={name} />
					</a>
				))}
			</Links> */}
		</Flex>
	</Wrapper>
)
