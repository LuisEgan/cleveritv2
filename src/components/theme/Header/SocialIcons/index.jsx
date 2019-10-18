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
			<a href="https://www.instagram.com/cleverit_latam/" target="_blank">
				<Instagram />
			</a>
			<a
				href="https://www.linkedin.com/company/cleverit-latam/"
				target="_blank"
			>
				<LinkedIn />
			</a>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;

	a {
		fill: unset;
	}

	svg {
		width: 25px;
		height: 25px;
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
