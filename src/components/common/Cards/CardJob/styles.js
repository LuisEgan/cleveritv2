import styled from 'styled-components'
import { FadeOut } from 'animate-css-styled-components'
import { Button as ButtonCommon, Input as InputCommon } from 'Common'
import { colors, fontSizes, routes } from '../../../../utils/constants'

export const Container = styled(FadeOut)`
	border: 2px solid ${colors.grayLight};
	border-radius: 10px;
	padding: 6% 5%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	align-self: auto;
`

export const Title = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: ${fontSizes.medium};
	height: 50px;
	font-weight: bold;

	svg {
		stroke: ${colors.grayLight};

		&:hover {
			cursor: pointer;
		}
	}
`

export const Description = styled.span`
	font-size: ${fontSizes.small};
	padding: 2.5% 0;
`

export const Separator = styled.div`
	border-bottom: 1px solid ${colors.grayLight};
	width: 45%;
	margin: 15px 0;
`

export const Inputs = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	margin: 2vh 0;
`

export const Input = styled(InputCommon)`
	width: 45%;
`

export const ButtonUpload = styled(ButtonCommon)`
	display: flex;
	align-items: center;
	background-color: white;
	border: 2px solid ${colors.grayLight};
	color: ${colors.purple};
	width: 45%;
	justify-content: space-evenly;
	font-weight: bold;
	margin-bottom: 3vh;

	path,
	line {
		stroke: ${colors.purple};
	}
`

export const ButtonSend = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
`

export const Button = styled(ButtonCommon)`
	display: flex;
	align-items: center;
	width: 25%;
	height: 2vh;
`

export const ButtonText = styled.div`
	flex: 1;
`

export const ButtonIcon = styled.div`
	flex: 0.4;
	display: flex;
`
