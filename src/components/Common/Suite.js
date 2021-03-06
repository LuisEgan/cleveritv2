import React, { useState, useEffect } from "react"
import "../../style/Common/common.css"
import NavBar from "./NavBar"

import { Container } from "react-bootstrap"
import Main from "./Main"
import Services from "./Services"
import CardsPortfolio from "./Portfolio"
import Companies from "./Companies"
import Plan from "./Plan"
import Photos from "./Photos"
import Footer from "./Footer"
import ModalForm from "./ModalForm"
import Testimonies from "./Testimonies"
import { getSuiteColor } from "../../utils/page"

const Suite = props => {
  const color = getSuiteColor(props.call)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [classAnimationVideo, setClassAnimationVideo] = useState("hidden")
  const [classAnimationPortfolio, setClassAnimationPortfolio] = useState(
    "hidden"
  )
  const [classAnimationCompanies, setClassAnimationCompanies] = useState(
    "hidden"
  )
  const [classAnimationPlan, setClassAnimationPlan] = useState("hidden")
  const [classAnimationPhoto, setClassAnimationPhoto] = useState("hidden")
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
    if (document.documentElement.scrollTop > 2500) {
      setClassAnimationPlan("visible")
    }
    if (document.documentElement.scrollTop > 3500) {
      setClassAnimationPhoto("visible")
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
      <ModalForm location={props.call} />
      <NavBar
        navbarState={navbarOpen}
        handleNavbar={handleNavbar}
        location={props.call}
      />
      <Container fluid className="mobileImageIcon">
        <section className="section-main" id="section-main">
          <Main location={props.call} />
        </section>
        <section className="section-video" id="section-video">
          <Services
            classAnimationVideo={classAnimationVideo}
            location={props.call}
          />
        </section>
        <section className="section-companies companies-full">
          <Companies classAnimationCompanies={classAnimationCompanies} />
        </section>
        <section className="section-portfolio" id="section-portfolio">
          <CardsPortfolio
            classAnimationPortfolio={classAnimationPortfolio}
            location={props.call}
          />
        </section>
        <section className="section-plan" id="section-plan">
          <Plan classAnimationPlan={classAnimationPlan} location={props.call} />
          {/* <Testimonies
            classAnimationPlan={classAnimationPlan}
            location={props.call}
          /> */}
        </section>
        <section className="section-photos" id="section-photos">
          <Photos
            classAnimationPhoto={classAnimationPhoto}
            location={props.call}
          />
        </section>
        <section className="section-footer-DevOps" id="section-footer">
          <Footer
            location={props.call}
            color={color}
            classAnimationFooter={classAnimationFooter}
          />
        </section>
      </Container>
    </>
  )
}

export default Suite
