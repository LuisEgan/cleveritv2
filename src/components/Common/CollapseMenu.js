import React from "react"
import styled from "styled-components"
import { Button, Dropdown } from "react-bootstrap"
import { useSpring, animated } from "react-spring"
import { getData } from "../../utils/page"
import { connect } from "react-redux"
import data from "../../data/content.json"
import { getSuiteColor } from "../../utils/page"
import _ from "lodash"

let CollapseMenu = props => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 })
  const {
    app: { lang },
    location,
  } = props

  const color = getSuiteColor(location)
  const content = getData(location, lang)

  let navLinksComponent = null
  switch (location) {
    case "home":
      navLinksComponent = _.keys(content.navBar).map((text, index) => {
        if (text === "quote") return
        if (text === "blog")
          return (
            <React.Fragment key={index}>
              <li>
                <a href={`/${text}`}>{content.navBar[text]}</a>
              </li>
            </React.Fragment>
          )
        if (text === "carrers")
          return (
            <React.Fragment key={index}>
              <li>
                <a href={`https://careers.cleveritgroup.com`}>
                  {content.navBar[text]}
                </a>
              </li>
            </React.Fragment>
          )
        return (
          <React.Fragment key={index}>
            <li>
              <a href={`#${text}`}>{content.navBar[text]}</a>
            </li>
          </React.Fragment>
        )
      })
      break
    case "blog":
      navLinksComponent = _.keys(content.navBar).map((text, index) => {
        if (text === "quote") return
        if (text === "carrers")
          return (
            <React.Fragment key={index}>
              <li>
                <a href={`https://careers.cleveritgroup.com`}>
                  {content.navBar[text]}
                </a>
              </li>
            </React.Fragment>
          )
        return (
          <React.Fragment key={index}>
            <li>
              <a href={`/${text}`}>{content.navBar[text]}</a>
            </li>
          </React.Fragment>
        )
      })
      break
    default:
      navLinksComponent = (
        <React.Fragment>
          <li>
            <a href="#section-video" onClick={props.handleNavbar}>
              {content.navBar.services}
            </a>
          </li>
          <li>
            <a href="#section-plan" onClick={props.handleNavbar}>
              {" "}
              {content.navBar.plan}
            </a>
          </li>
          <li>
            <a href="#section-photos" onClick={props.handleNavbar}>
              {" "}
              {content.navBar.team}
            </a>
          </li>
          <li>
            <a href="#section-footer" onClick={props.handleNavbar}>
              {" "}
              {content.navBar.contact}
            </a>
          </li>
        </React.Fragment>
      )
  }

  const onChangeLang = language => {
    const { changeLang } = props
    changeLang(language)
  }

  const BtnNav = styled(Button)`
    background-color: ${color} !important;
    border-color: ${color} !important;
    color: white !important;
    :hover,
    :visited,
    :focus,
    :active {
      background-color: ${color} !important;
      border-color: ${color} !important;
      color: white !important;
    }
  `
  const NavLinks = styled.ul`
    list-style-type: none !important;
    padding: 2rem 1rem 50rem 2rem !important;

    & li {
      transition: all 300ms linear 0s !important;
      z-index: 1 !important;
      justify-content: center !important;
      text-align: center !important;
      padding-top: 1rem !important;
    }

    & a {
      font-size: 1.4rem !important;
      line-height: 2 !important;
      color: black !important;

      text-decoration: none !important;
      cursor: pointer !important;
      z-index: 1 !important;

      &:hover {
        color: ${color} !important;
        border-bottom: 1px solid ${color} !important;
      }
    }
  `

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          {navLinksComponent}
          <li>
            <Dropdown>
              <Dropdown.Toggle variant="white" id="dropdown-basic">
                <i className="fas fa-globe icon-drop-nav"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={onChangeLang.bind(null, "es")}>
                  <i className="fas fa-globe"></i> Es
                </Dropdown.Item>
                <Dropdown.Item onClick={onChangeLang.bind(null, "en")}>
                  <i className="fas fa-globe"></i> En
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <BtnNav
              onClick={() => {
                props.showModalFunc(true)
              }}
            >
              {content.navBar.quote}
            </BtnNav>
          </li>
        </NavLinks>
      </CollapseWrapper>
    )
  }
  return null
}

const CollapseWrapper = styled(animated.div)`
  background: white;
  position: fixed;
  top: 4.5rem;
  left: 0;
  right: 0;
  z-index: 100;
`

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    changeLang: lang => dispatch({ type: "SET_LANGUAGE", payload: lang }),
    showModalFunc: show => dispatch({ type: "SHOW_MODAL", payload: show }),
  }
}

CollapseMenu = connect(mapStateToProps, mapDispatchToProps)(CollapseMenu)

export default CollapseMenu
