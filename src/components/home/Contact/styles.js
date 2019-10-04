import styled from 'styled-components'
import { desktopMaxWidth, colors } from '../../../utils/constants'

export const Wrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: flex-start;
	justify-content: space-between;

	@media (max-width: ${desktopMaxWidth}) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	flex: 1;
	padding-right: 2rem;
	width: 100%;

	@media (max-width: ${desktopMaxWidth}) {
		padding-right: unset;
		width: 100%;
		order: 1;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 26pt;
		color: ${colors.purple};
	}

	p {
		margin-bottom: 2.5rem;
		font-size: 20pt;
		font-weight: normal;
		line-height: 1.3;
		color: #707070;
	}
`

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: ${desktopMaxWidth}) {
		width: 100%;
		margin-bottom: 2rem;
	}

	img {
		width: 100%;
	}
`

export const Anchor = styled.div`
	position: absolute;
	margin-top: -60vh;
`
