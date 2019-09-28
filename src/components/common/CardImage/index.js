import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../../utils/constants'

const Container = styled.div`
	padding: 1rem;
	background: #fff;
	display: flex;
	flex-direction: column;
	width: 10vw;
	min-width: 200px;
	align-items: center;
	background-color: transparent;

	svg {
		width: 50%;
	}

	span {
		padding: 2% 0;
	}
`

const Title = styled.span`
	font-size: 13pt;
	color: ${colors.purple};
	font-weight: bold;
`

const Description = styled.span`
	font-size: 10pt;
	color: ${colors.gray};
	text-align: center;
`

const CardImage = props => {
	const { image, title, description } = props

	return (
		<Container>
			{image}

			<Title>{title}</Title>

			<Description>{description}</Description>
		</Container>
	)
}

CardImage.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
}

export default CardImage
