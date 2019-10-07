import React from 'react'
import { Form, withFormik, FastField, ErrorMessage } from 'formik'
import Recaptcha from 'react-google-recaptcha'
import * as Yup from 'yup'
import { Button, Input } from 'Common'
import { recaptcha_key } from 'Data'
import { Error, Center, InputField } from './styles'
import { sendEmail } from '../../../utils/email'

const ContactForm = ({
	setFieldValue,
	isSubmitting,
	values,
	errors,
	touched,
}) => (
	<Form
		name="portfolio-dev"
		method="post"
		data-netlify="true"
		data-netlify-recaptcha="true"
		data-netlify-honeypot="bot-field"
	>
		<InputField>
			<Input
				as={FastField}
				type="text"
				name="name"
				component="input"
				aria-label="name"
				placeholder="¿Cómo te llamas?*"
				error={touched.name && errors.name}
			/>
			<ErrorMessage component={Error} name="name" />
		</InputField>
		<InputField>
			<Input
				id="email"
				aria-label="email"
				component="input"
				as={FastField}
				type="email"
				name="email"
				placeholder="Email*"
				error={touched.email && errors.email}
			/>
			<ErrorMessage component={Error} name="email" />
		</InputField>
		<InputField>
			<Input
				as={FastField}
				component="textarea"
				aria-label="message"
				id="message"
				rows="8"
				type="text"
				name="message"
				placeholder="Mensaje*"
				error={touched.message && errors.message}
			/>
			<ErrorMessage component={Error} name="message" />
		</InputField>
		{values.name && values.email && values.message && (
			<InputField>
				<FastField
					component={Recaptcha}
					sitekey={recaptcha_key}
					name="recaptcha"
					onChange={value => setFieldValue('recaptcha', value)}
				/>
				<ErrorMessage component={Error} name="recaptcha" />
			</InputField>
		)}
		{values.success && (
			<InputField>
				<Center>
					<h4>
						Your message has been successfully sent, I will get back to you
						ASAP!
					</h4>
				</Center>
			</InputField>
		)}
		<Center>
			<Button type="submit" disabled={isSubmitting}>
				Enviar
			</Button>
		</Center>
	</Form>
)

export default withFormik({
	mapPropsToValues: () => ({
		name: '',
		email: '',
		message: '',
		recaptcha: '',
		success: false,
	}),
	validationSchema: () =>
		Yup.object().shape({
			name: Yup.string().required('¡Necesitamos tu nombre!'),
			email: Yup.string()
				.email('¡Email inválido!')
				.required('¡Necesitamos tu email!'),
			message: Yup.string().required('¿Qué nos quieres decir? 🤔'),
			recaptcha: Yup.string().required('¡Abajo Skynet! 🤖🤖🤖🤖'),
		}),
	handleSubmit: async (
		{ name, email, message, recaptcha },
		{ setSubmitting, resetForm, setFieldValue }
	) => {
		try {
			const encode = data => {
				return Object.keys(data)
					.map(
						key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
					)
					.join('&')
			}

			await fetch('/?no-cache=1', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: encode({
					'form-name': 'portfolio-dev',
					name,
					email,
					message,
					'g-recaptcha-response': recaptcha,
				}),
			})
			await setSubmitting(false)
			await setFieldValue('success', true)

			const res = await sendEmail({
				to: 'personas@cleverit.cl',
				html: `La persona de nombre ${name} e email ${email} escribió el siguiente mensaje: <br/> ${message}`,
				subject: 'Contacto',
			})

			const {
				data: { error_code, error, message },
			} = res

			if (error_code) throw new Error(message || error || error_code)
			// setTimeout(() => resetForm(), 2000)
		} catch (err) {
			console.log('err: ', err)
			setSubmitting(false)
			setFieldValue('success', false)
			alert('Something went wrong, please try again!') // eslint-disable-line
		}
	},
})(ContactForm)
