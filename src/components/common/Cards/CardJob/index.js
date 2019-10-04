import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { HiddenInput } from 'Common'
import ArrowRight from 'Static/svgs/arrow_right.svg'
import Upload from 'Static/svgs/upload.svg'
import X from 'Static/svgs/x.svg'
import Clock from 'Static/svgs/clock.svg'
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
import { colors, fontSizes } from '../../../../utils/constants'
import { sendEmail } from '../../../../utils/email'

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

	const fileRef = useRef(null)
	const [close, setClose] = useState(false)
	const [feedback, setFeedback] = useState(null)
	const [file, setFile] = useState()
	const [loading, setLoading] = useState(false)

	const [userName, setUserName] = useState('')
	const [userEmail, setUserEmail] = useState('')

	const onUpload = event => {
		setFile(event.target.files[0])
	}

	const onSend = async () => {
		setLoading(true)
		try {
			const res = await sendEmail({
				to: 'personas@cleverit.cl',
				html: `Aplicación de empleo de ${userName} de correo ${userEmail}. CV anexado.`,
				subject: 'Aplicación a trabajo en Cleverit',
				attachments: [
					{
						name: 'CV',
						value: file,
					},
				],
			})

			const {
				data: { error_code },
			} = res

			setFeedback(!error_code)
		} catch (error) {
			console.log('error: ', error)
		} finally {
			setLoading(false)
		}
	}

	const onClose = ({ timeToClose }) => {
		setClose(true)

		setTimeout(() => {
			onCloseProp && onCloseProp()
		}, timeToClose || 700)
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
					<Input
						placeholder="Nombre y apellido"
						value={userName}
						onChange={e => setUserName(e.target.value)}
					/>
					<Input
						placeholder="E-mail"
						value={userEmail}
						type="email"
						onChange={e => setUserEmail(e.target.value)}
					/>
				</Inputs>

				<ButtonUpload onClick={() => file.current.click()}>
					<HiddenInput ref={fileRef} type="file" onChange={onUpload} />
					<span>Compartir curriculum / CV</span>

					{<Upload />}
				</ButtonUpload>
			</div>

			{feedback !== null ? (
				<Feedback feedback={feedback}>¡Éxito!</Feedback>
			) : (
				<ButtonSend>
					<Button onClick={onSend}>
						<ButtonText>{loading ? 'Cargando... ' : 'Solicitar'}</ButtonText>
						<ButtonIcon>{loading ? <Clock /> : <ArrowRight />}</ButtonIcon>
					</Button>
				</ButtonSend>
			)}
		</Container>
	)
}

const Feedback = styled.div`
	display: flex;
	width: 100%;
	padding: 1.5% 0;
	justify-content: center;
	align-items: center;
	color: ${colors.purple};
	font-size: ${fontSizes.big};

	${props => {
		const { feedback } = props

		return feedback === false
			? `
				color: red;
			`
			: ``
	}}
`

CardJob.propTypes = {
	description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	onSend: PropTypes.func,
}

CardJob.defaultProps = {}

export default CardJob
