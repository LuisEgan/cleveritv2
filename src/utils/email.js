import axios from 'axios'

const API_USER_ID = '0595c90a7bced1b05d27ef324ad8f374'
const API_SECRET = '4d49214bed83779ab69b32816e30c905'

export const sendEmail = async ({ to, html, subject, attachments, cb }) => {
	try {
		let res = await axios({
			method: 'POST',
			url: 'https://api.sendpulse.com/oauth/access_token',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			data: {
				client_id: API_USER_ID,
				client_secret: API_SECRET,
				grant_type: 'client_credentials',
			},
		})

		const {
			data: { access_token },
		} = res
		console.log('res: ', res)
		if (!access_token) throw new Error('No access_token')
		console.log('TCL: sendEmail -> access_token', access_token)

		res = await axios({
			method: 'POST',
			url: 'https://api.sendpulse.com/smtp/emails',
			headers: {
				'Content-Type': 'application/json',
				key: 'Authorization',
				value: `Bearer ${access_token}`,
				'Access-Control-Allow-Origin': '*',
			},
			data: {
				email: {
					html,
					subject,
					from: {
						name: 'Cleverit',
						email: 'admin@cleverit.cl',
					},
					to: [
						{
							name: 'RRHH',
							email: to,
						},
					],
					attachments,
				},
			},
		})

		return res
	} catch (error) {
		console.log('error: ', error)
		return error
	} finally {
		cb && cb()
	}
}
