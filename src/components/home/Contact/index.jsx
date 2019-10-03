import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/contact.svg'
import { Wrapper, Details, Thumbnail, Anchor } from './styles'
import ContactForm from './ContactForm'

export const Contact = () => (
	<Wrapper as={Container}>
		<Anchor id="contact" />
		<h1>Contacto</h1>
		<Details>
			<ContactForm />
		</Details>
		{/* <Thumbnail>
			<img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
		</Thumbnail> */}
	</Wrapper>
)
