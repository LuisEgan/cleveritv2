import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'Common'
import Logo from 'Static/svgs/cleverit_logo.svg'
import styled from 'styled-components'
import NavbarLinks from '../NavbarLinks'
import SocialIcons from '../SocialIcons'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">
			<Logo />
		</Link>
		<NavbarLinks desktop />
		<SocialIcons />
	</Wrapper>
)

const Wrapper = styled.div`
	padding: 1.5rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 5vh;

	a {
		color: #212121;
	}
`

export default Navbar
