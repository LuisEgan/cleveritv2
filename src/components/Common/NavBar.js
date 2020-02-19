import React, { useEffect } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import Brand from "./Brand"
import BurgerMenu from "./BurgerMenu"
import CollapseMenu from "./CollapseMenu"
import { getData, getSuiteColor } from "../../utils/page"
import { connect } from "react-redux"
import { Button, Dropdown } from "react-bootstrap"
import _ from "lodash"

let NavBar = props => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)",
  })

  const {
    app: { lang },
    location,
  } = props

  const content = getData(location, lang)
  const color = getSuiteColor(location)

  useEffect(() => {}, [])

  const onChangeLang = language => {
    const { changeLang } = props
    changeLang(language)
  }

  const NavLinks = styled(animated.ul)`
    justify-self: end !important;
    list-style-type: none !important;
    margin: auto 0 !important;
    display: flex !important;
    align-items: center !important;

    & a {
      color: #55595c !important;
      border-bottom: 1px solid transparent !important;
      margin-right: 1.2rem !important;
      transition: all 300ms linear 0s !important;
      text-decoration: none !important;
      cursor: pointer !important;

      &:hover {
        color: ${color} !important;
      }

      @media (max-width: 868px) {
        display: none !important;
      }
    }
  `

  const BtnNavHome = styled(Button)`
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

    @media (max-width: 868px) {
      display: none !important;
    }
  `

  const DropdownWrapper = styled.div`
    @media (max-width: 868px) {
      display: none !important;
    }
  `

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
              <a href={`https://careers.cleveritgroup.com`}>
                {content.navBar[text]}
              </a>
            </React.Fragment>
          )
        return (
          <React.Fragment key={index}>
            <a href={`#${text}`}>{content.navBar[text]}</a>
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
              <a href={`https://careers.cleveritgroup.com`}>
                {content.navBar[text]}
              </a>
            </React.Fragment>
          )
        return (
          <React.Fragment key={index}>
            <a href={`/${text}`}>{content.navBar[text]}</a>
          </React.Fragment>
        )
      })
      break
    default:
      navLinksComponent = (
        <React.Fragment>
          <a href="#section-video">{content.navBar.services}</a>
          <a href="#section-plan"> {content.navBar.plan}</a>
          <a href="#section-photos"> {content.navBar.team}</a>
          <a href="#section-footer"> {content.navBar.contact}</a>
        </React.Fragment>
      )
  }

  return (
    <>
      <StyledNavBar style={barAnimation}>
        <FlexContainer>
          <Brand location={location} />
          <NavLinks>
            {navLinksComponent}
            <BtnNavHome
              className="btn-nav-home"
              onClick={() => props.showModalFunc(true)}
            >
              {content.navBar.quote}
            </BtnNavHome>
            <DropdownWrapper>
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
            </DropdownWrapper>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </StyledNavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
        location={location}
      />
    </>
  )
}

const StyledNavBar = styled(animated.nav)`
  position: fixed !important;
  width: 100% !important;
  top: 0 !important;
  left: 0 !important;
  background: #ffffff !important;
  z-index: 100 !important;
  font-size: 1.2rem !important;

  .btn-light:hover {
    background-color: transparent !important;
    border-color: transparent !important;
  }
  .show > .btn-light.dropdown-toggle:focus {
    box-shadow: none !important;
  }
  .btn-light:not(:disabled):not(.disabled):active
    .show
    > .btn-light.dropdown-toggle {
    color: #212529 !important;
    background-color: transparent !important;
    border-color: transparent !important;
  }
  .btn-light.focus,
  .btn-light:focus {
    background-color: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
  }
  .dropdown-item {
    cursor: pointer !important;
  }
`

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 5rem;
  justify-content: space-between;
  height: 5rem;
  @media (max-width: 1100px) {
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }
`

const BurgerWrapper = styled.div`
  margin: auto 0 !important;

  @media (min-width: 869px) {
    display: none !important;
  }
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

NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBar)

export default NavBar
