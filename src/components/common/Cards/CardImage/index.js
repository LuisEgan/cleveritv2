import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../../../utils/constants'

const Container = styled.div`
	padding: 1rem;
	background: #fff;
	display: flex;
	flex-direction: column;
	min-width: 200px;
	background-color: transparent;

	svg {
		width: 50%;
	}

	span {
		padding: 2% 0;
	}

	img {
		border-radius: 10px;
	}

	${props => {
		const { width, height, titleAlign } = props

		return `
			align-items: ${titleAlign};		
			width: ${width};
			${height ? `height: ${height};` : ``}
		`
	}}
`

const Title = styled.span`
	font-size: 13pt;
	color: ${colors.purple};
	font-weight: bold;
`

const Description = styled.span`
	font-size: 10pt;
	color: ${colors.gray};

	${props => {
		const { descAlign } = props

		return `
			text-align: ${descAlign};		
		`
	}}
`

const StyledImage = styled.div`
	width: 582px;
	height: 452px;

	img {
		object-fit: cover;
	}
`

const CardImage = props => {
	const { image, title, description, descAlign, thumbnail } = props

	return (
		<Container {...props}>
			{!thumbnail ? <StyledImage>{image}</StyledImage> : image}
			<Title>{title}</Title>
			<Description descAlign={descAlign}>{description}</Description>
		</Container>
	)
}

CardImage.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	titleAlign: PropTypes.string,
	descAlign: PropTypes.string,
	thumbnail: PropTypes.bool,
}

CardImage.defaultProps = {
	width: '10vw',
	titleAlign: 'center',
	descAlign: 'center',
	thumbnail: true,
}

export default CardImage
