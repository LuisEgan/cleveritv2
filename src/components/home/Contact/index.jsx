import React from 'react'
import { Container } from 'Common'
import contact from 'Static/illustrations/contact.svg'
import { Wrapper, Details, Thumbnail, Anchor } from './styles'
import ContactForm from './ContactForm'
import SectionWrapper from '../../common/Layout/SectionWrapper'

export const Contact = () => (
	<Wrapper as={SectionWrapper}>
		<Anchor id="contact" />
		<Details>
			<h1>Contacto</h1>
			<ContactForm />
		</Details>
		<Thumbnail>
			<img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
		</Thumbnail>
	</Wrapper>
)
