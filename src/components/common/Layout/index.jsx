import React from 'react'
import { Footer, Header } from 'Theme'
import styled from 'styled-components'
import { Global } from './styles'
import './fonts.css'

export const Overlay = styled.div`
	background-image: url('../../svgs/bg_body_cleverit.svg');
`

export const Layout = ({ children }) => (
	<>
		<Global />
		<Header />
		<Overlay>
			{children}
			<Footer />
		</Overlay>
	</>
)
