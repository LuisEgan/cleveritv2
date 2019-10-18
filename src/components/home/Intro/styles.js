import styled from 'styled-components'
import { desktopMaxWidth, colors } from '../../../utils/constants'

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	background-image: url('../illustrations/overlay.svg');
	background-size: contain;
	background-position: right top;
	background-repeat: no-repeat;
`

export const IntroWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	@media (max-width: ${desktopMaxWidth}) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	flex: 0.7;
	padding-top: 12vh;

	@media (max-width: ${desktopMaxWidth}) {
		width: 100%;
		margin-bottom: 2rem;
	}

	h2 {
		margin-bottom: 2rem;
		font-size: 56px;

		@media (max-width: 680px) {
			font-size: 30pt;
		}
	}

	h5 {
		margin-bottom: 2.5rem;
		font-weight: normal;
		color: ${colors.gray};
		line-height: 20px;
	}
`

export const Clients = styled.div`
	display: flex;
	flex-wrap: wrap;
	/* justify-content: space-between; */
	margin-top: 7vh;

	svg {
		max-width: 5vw;
		margin-right: 20px;
	}
`

export const Thumbnail = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 10vh;
	flex: 1;

	@media (max-width: ${desktopMaxWidth}) {
		width: 100%;
		display: none;
	}

	img {
		width: 100%;
	}
`
