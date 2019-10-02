import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button as ButtonCommon } from 'Common'
import ArrowRight from 'Static/svgs/arrow_right.svg'
import { colors, fontSizes, routes } from '../../../../utils/constants'

const Container = styled.div`
	border: 2px solid ${colors.grayLight};
	border-radius: 10px;
	padding: 6% 5%;
	display: flex;
	flex-direction: column;
	align-self: self-end;

	${props => {
		const { width } = props
		return `
      width: ${width}
    `
	}}
`

const Title = styled.div`
	font-size: ${fontSizes.medium};
	height: 50px;
	font-weight: bold;
`

const Description = styled.span`
	font-size: ${fontSizes.small};
`

const Separator = styled.div`
	border-bottom: 1px solid ${colors.grayLight};
	width: 45%;
	margin: 15px 0;
`
const Button = styled(ButtonCommon)`
	display: flex;
	padding: 15px 0;
	width: 100%;
	align-items: center;
`

const ButtonText = styled.div`
	flex: 1;
	margin-left: 10%;
`

const ButtonIcon = styled.div`
	flex: 0.4;
	display: flex;
`

const CardButton = props => {
	const {
		title,
		description,
		btnText,
		btnIcon,
		route,
		onClick,
		...styles
	} = props

	const btnProps = route ? { to: route, as: Link } : { onClick }

	return (
		<Container {...styles}>
			<div>
				<Title>{title}</Title>
				<br />
				<br />
				<Description>{description}</Description>

				<Separator />

				<Button offset={100} {...btnProps}>
					<ButtonText>{btnText}</ButtonText>
					<ButtonIcon>{btnIcon}</ButtonIcon>
				</Button>
			</div>
		</Container>
	)
}

CardButton.propTypes = {
	route: PropTypes.string,
	width: PropTypes.string,
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	btnText: PropTypes.string,
	onClick: PropTypes.func,
}

CardButton.defaultProps = {
	width: '10vw',
	btnText: 'Solicitar',
	btnIcon: <ArrowRight />,
}

export default CardButton
