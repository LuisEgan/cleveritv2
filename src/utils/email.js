import axios from 'axios'

export const sendEmail = async ({ to, html, subject, attachments, cb }) => {
	try {
		let res = await axios({
			method: 'post',
			url: 'https://api.sendpulse.com/oauth/access_token',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Credentials': true,
				crossdomain: true,
			},
			data: {
				client_id: '0595c90a7bced1b05d27ef324ad8f374',
				client_secret: '4d49214bed83779ab69b32816e30c905',
				grant_type: 'client_credentials',
			},
		})

		const {
			data: { access_token },
		} = res

		res = await axios({
			method: 'post',
			url: 'https://api.sendpulse.com/smtp/emails',
			headers: {
				'Content-Type': 'application/json',
				key: 'Authorization',
				value: `Bearer ${access_token}`,
				'Access-Control-Allow-Credentials': true,
				crossdomain: true,
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
