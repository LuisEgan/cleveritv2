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
`
