import styled from 'styled-components'
import { FadeOutLeft } from 'animate-css-styled-components'
import { fontSizes, colors } from '../../../utils/constants'

export const Container = styled.div`
	padding-top: 10vh;
`

export const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	flex: 0.4;
`

export const Title = styled.span`
	font-size: ${fontSizes.bigger};
	font-weight: bold;
	color: ${colors.purple};
	margin-bottom: 3vh;
`

export const ContentContainer = styled.div`
	display: flex;
	flex: 1;
	flex-wrap: wrap;
	overflow-y: auto;
	overflow-x: hidden;
	height: 100%;
	padding: 0 2.5%;
	justify-content: space-around;

	&::-webkit-scrollbar {
		width: 0;
	}
`

export const Card = styled(FadeOutLeft)`
	margin-bottom: 3vh;
	margin-right: 15px;
`
