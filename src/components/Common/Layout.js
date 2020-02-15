import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

const Layout = props => {
  return (
    <>
      <NavBar location={props.call} />
      <main>{children}</main>
      <Footer location={props.call} />
    </>
  )
}

export default Layout
