import styled from 'styled-components'
import { desktopMaxWidth } from '../../../utils/constants'

export const Wrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	@media (max-width: ${desktopMaxWidth}) {
		flex-direction: column;
	}
`

export const Details = styled.div`
	flex: 1;
	padding-right: 2rem;

	@media (max-width: ${desktopMaxWidth}) {
		padding-right: unset;
		width: 100%;
		order: 1;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 26pt;
		color: #212121;
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