import React from 'react'
import styled from 'styled-components'
import Twitter from 'Static/svgs/twitter.svg'
import Telegram from 'Static/svgs/telegram.svg'
import Instagram from 'Static/svgs/instagram.svg'
import LinkedIn from 'Static/svgs/linkedin.svg'
import { desktopMaxWidth, colors } from '../../../../utils/constants'

const SocialIcons = props => {
	return (
		<Wrapper>
			<Instagram />
			<LinkedIn />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;

	svg {
		width: 35px;
		height: 35px;
		padding: 0 5px;
		stroke: ${colors.grayLight};
		fill: transparent;

		&:hover {
			cursor: pointer;
			stroke: ${colors.purple};
		}
	}

	@media (max-width: ${desktopMaxWidth}) {
		display: none !important;
	}
`

export default SocialIcons
