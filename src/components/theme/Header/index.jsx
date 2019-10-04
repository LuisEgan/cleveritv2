import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import Hamburger from './Hamburger'
import Sidebar from './Sidebar'

export const Header = () => {
	const [isSidebarVisible, setIsSideBarVisible] = useState(false)
	return (
		<Wrapper>
			<Sidebar sidebar={isSidebarVisible} toggle={setIsSideBarVisible} />

			<Navbar />

			<Hamburger sidebar={isSidebarVisible} toggle={setIsSideBarVisible} />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	background: white;
	width: 100%;
	position: fixed;
	z-index: 999;
	box-shadow: 0px 4px 3px 0px rgba(0, 0, 0, 0.07);
`
