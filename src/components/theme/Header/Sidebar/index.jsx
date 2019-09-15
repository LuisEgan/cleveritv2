import React from 'react'
import NavbarLinks from '../NavbarLinks'
import { Wrapper, SideMenuDimBg } from './styles'

const Sidebar = ({ sidebar, toggle }) => (
	<>
		<SideMenuDimBg sidebar={sidebar} onClick={() => toggle(!sidebar)} />
		<Wrapper active={sidebar} onClick={toggle}>
			<NavbarLinks />
		</Wrapper>
	</>
)

export default Sidebar
