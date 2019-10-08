import React from 'react'
// import contact from 'Static/svgs/illus-portada.svg'
import styled from 'styled-components'
import { Wrapper, Details, Thumbnail, Anchor } from '../ContactForm/styles'
import ContactForm from '../ContactForm'
import SectionWrapper from '../../common/Layout/SectionWrapper'

export const ContactBody = () => (
	<Wrapper as={SectionWrapper}>
		<Anchor id="contact" />
		<Details>
			<h1>Contacto</h1>
			<ContactForm />
		</Details>
		<Thumbnail />
	</Wrapper>
)

export default ContactBody
