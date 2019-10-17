import React from 'react'
import { Form, withFormik, FastField, ErrorMessage } from 'formik'
import Recaptcha from 'react-google-recaptcha'
import * as Yup from 'yup'
import { Button, Input } from 'Common'
import { recaptcha_key } from 'Data'
import { Error, Center, InputField } from './styles'
import { sendEmail } from '../../../utils/email'

const inputs = [
	{
		'aria-label': 'name',
		id: 'name',
		type: 'text',
		name: 'name',
		component: 'input',
		placeholder: '¿Cómo te llamas?*',
	},
	{
		'aria-label': 'email',
		id: 'email',
		type: 'email',
		name: 'email',
		component: 'input',
		placeholder: 'Email*',
	},
	{
		'aria-label': 'message',
		id: 'message',
		type: 'text',
		name: 'message',
		component: 'textarea',
		placeholder: 'Mensaje*',
		rows: '8',
	},
]

ContactForm = ({ isSubmitting, values, errors, touched }) => (
	<Form
		name="contact"
		method="post"
		data-netlify="true"
		data-netlify-recaptcha="true"
		data-netlify-honeypot="bot-field"
	>
		{inputs.map(input => {
			const { name } = input
			return (
				<InputField key={name}>
					<Input
						as={FastField}
						error={touched[name] && errors[name]}
						{...input}
					/>
					<ErrorMessage component={Error} name={name} />
				</InputField>
			)
		})}

		{/** ************CAPTCHA************** */}
		{/* {values.name && values.email && values.message && (
			<InputField>
				<FastField
					component={Recaptcha}
					sitekey={recaptcha_key}
					name="recaptcha"
					onChange={value => setFieldValue('recaptcha', value)}
				/>
				<ErrorMessage component={Error} name="recaptcha" />
			</InputField>
		)} */}

		{/** ************FEEDBACK************** */}
		{values.success && (
			<InputField>
				<Center>
					<h4>¡Tu mensaje fue enviado!</h4>
				</Center>
			</InputField>
		)}

		{/** ************BUTTON************** */}
		<Center>
			<Button type="submit" disabled={isSubmitting}>
				Contactar
			</Button>
		</Center>
	</Form>
)

ContactForm = withFormik({
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
			// recaptcha: Yup.string().required('¡Abajo Skynet! 🤖🤖🤖🤖'),
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

			// await fetch('/?no-cache=1', {
			// 	method: 'POST',
			// 	headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			// 	body: encode({
			// 		'form-name': 'portfolio-dev',
			// 		name,
			// 		email,
			// 		message,
			// 		'g-recaptcha-response': recaptcha,
			// 	}),
			// })
			await setSubmitting(false)
			await setFieldValue('success', true)

			// const res = await sendEmail({
			// 	to: 'personas@cleverit.cl',
			// 	html: `La persona de nombre ${name} e email ${email} escribió el siguiente mensaje: <br/> ${message}`,
			// 	subject: 'Contacto',
			// })

			// const {
			// 	data: { error_code, error, message },
			// } = res

			// if (error_code) throw new Error(message || error || error_code)
			// setTimeout(() => resetForm(), 2000)
		} catch (err) {
			console.error('err: ', err)
			setSubmitting(false)
			setFieldValue('success', false)
		}
	},
})(ContactForm)

export default ContactForm

const ContactForm_Netlify = () => {
	return (
		<form name="contact" method="POST" data-netlify="true">
			<p>
				<label>
					Your Name: <input type="text" name="name" />
				</label>
			</p>
			<p>
				<label>
					Your Email: <input type="email" name="email" />
				</label>
			</p>
			<p>
				<label>
					Message: <textarea name="message" />
				</label>
			</p>
			<p>
				<button type="submit">Send</button>
			</p>
		</form>
	)
}
