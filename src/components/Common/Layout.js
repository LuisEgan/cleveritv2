import React, { useState } from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import styled from "styled-components"

const Layout = ({ children, noHeader, location }) => {
  console.log("TCL: Layout -> children", children)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <>
      {!noHeader && (
        <NavBar
          location={location}
          navbarState={navbarOpen}
          handleNavbar={handleNavbar}
        />
      )}
      <Overlay>
        {children}
        <Footer location={location} />
      </Overlay>
    </>
  )
}

export const Overlay = styled.div`
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`

export default Layout
