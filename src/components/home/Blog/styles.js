import styled from 'styled-components'
import { desktopMaxWidth } from '../../../utils/constants'

export const Wrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	@media (max-width: ${desktopMaxWidth}) {
		flex-direction: row;
	}
`

export const Details = styled.div`
	flex: 1;
	padding-right: 2rem;
	flex-direction: row-reverse;

	@media (max-width: ${desktopMaxWidth}) {
		padding-right: unset;
		width: 100%;
		order: 1;
	}
`
