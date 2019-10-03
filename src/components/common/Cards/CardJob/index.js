import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FadeOut } from 'animate-css-styled-components'
import { HiddenInput } from 'Common'
import ArrowRight from 'Static/svgs/arrow_right.svg'
import Upload from 'Static/svgs/upload.svg'
import X from 'Static/svgs/x.svg'
import {
	Container,
	Title,
	Description,
	Separator,
	Inputs,
	Input,
	ButtonUpload,
	ButtonSend,
	Button,
	ButtonText,
	ButtonIcon,
} from './styles'

const CardJob = props => {
	const {
		title,
		descriptionFull,
		tech,
		onSend: onSendProp,
		onUpload: onUploadProp,
		onClose: onCloseProp,
		...styles
	} = props

	const file = useRef(null)
	const [close, setClose] = useState(false)

	const onUpload = event => {
		console.log(event.target.files[0])
	}

	const onSend = () => {}

	const onClose = () => {
		setClose(true)

		setTimeout(() => {
			onCloseProp && onCloseProp()
		}, 700)
	}

	return (
		<Container
			duration=".5s"
			playState={close ? 'running' : 'paused'}
			{...styles}
		>
			<div>
				<Title>
					{title}

					<X onClick={onClose} />
				</Title>
				<span>
					{tech} <br /> Santiago, Chile
				</span>

				<Separator />

				<Description>{descriptionFull}</Description>

				<Inputs>
					<Input placeholder="Nombre y apellido" />
					<Input placeholder="E-mail" />
				</Inputs>

				<ButtonUpload onClick={() => file.current.click()}>
					<HiddenInput ref={file} type="file" onChange={onUpload} />
					<span>Compartir curriculum / CV</span>

					{<Upload />}
				</ButtonUpload>
			</div>

			<ButtonSend>
				<Button onClick={onSend}>
					<ButtonText>Solicitar</ButtonText>
					<ButtonIcon>
						<ArrowRight />
					</ButtonIcon>
				</Button>
			</ButtonSend>
		</Container>
	)
}

CardJob.propTypes = {
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	onSend: PropTypes.func,
}

CardJob.defaultProps = {}

export default CardJob
