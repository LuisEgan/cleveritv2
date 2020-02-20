import React, { useState, useEffect } from "react"

import "../style/Home/bodyHome.css"
import { Container } from "react-bootstrap"
import ModalForm from "../components/Common/ModalForm"
import NavBar from "../components/Common/NavBar"
import Main from "../components/Common/Main"
import Footer from "../components/Common/Footer"
import CardsPortfolio from "../components/Common/Portfolio"
import Services from "../components/Home/Services"
import Companies from "../components/Home/Companies"
import Blog from "../components/Home/Blog"

const Home = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [classAnimationVideo, setClassAnimationVideo] = useState("hidden")
  const [classAnimationPortfolio, setClassAnimationPortfolio] = useState(
    "hidden"
  )
  const [classAnimationCompanies, setClassAnimationCompanies] = useState(
    "hidden"
  )
  const [classAnimationPlan, setClassAnimationPlan] = useState("hidden")
  const [classAnimationFooter, setClassAnimationFooter] = useState("hidden")

  const handleAnimation = () => {
    if (document.documentElement.scrollTop > 0) {
      setClassAnimationVideo("visible")
    }
    if (document.documentElement.scrollTop > 650) {
      setClassAnimationCompanies("visible")
    }
    if (document.documentElement.scrollTop > 800) {
      setClassAnimationPortfolio("visible")
    }
    if (document.documentElement.scrollTop > 2550) {
      setClassAnimationPlan("visible")
    }
    if (document.documentElement.scrollTop > 3000) {
      setClassAnimationFooter("visible")
    }
  }
  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen)
  }

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
    } catch (error) {
      window.scrollTo(0, 0)
    }
    window.onscroll = () => handleAnimation()
  }, [])

  return (
    <>
      <NavBar
        navbarState={navbarOpen}
        handleNavbar={handleNavbar}
        location="home"
      />
      <ModalForm location="home" />
      <Container fluid>
        <section className="section-main" id="section-main">
          <Main />
        </section>
        <section className="section-services" id="expertise">
          <Services classAnimationVideo={classAnimationVideo}></Services>
        </section>
        <section className="section-companies-home">
          <Companies classAnimationCompanies={classAnimationCompanies} />
        </section>
        <section className="section-portfolio-home" id="projects">
          <CardsPortfolio classAnimationPortfolio={classAnimationPortfolio} />
        </section>
        <section className="section-blog" id="section-blog">
          <Blog classAnimationPlan={classAnimationPlan} />
        </section>
        <section className="section-footer" id="section-footer">
          <Footer classAnimationFooter={classAnimationFooter} color="#371a9f" />
        </section>
      </Container>
    </>
  )
}

export default Home
