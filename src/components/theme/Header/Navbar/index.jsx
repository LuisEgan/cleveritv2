import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import Logo from 'Static/svgs/ilustra_idea.svg'
import NavbarLinks from '../NavbarLinks'
import { Wrapper } from './styles'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">
			<Logo />
		</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
