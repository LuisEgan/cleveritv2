import React from 'react'
import { Footer, Header } from 'Theme'
import { Global } from './styles'
import './fonts.css'

export const Layout = ({ children }) => (
	<>
		<Global />
		<Header />
		{children}
		<Footer />
	</>
)
