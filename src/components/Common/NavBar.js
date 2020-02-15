import React, { useEffect } from "react"
import styled from "styled-components"
import { useSpring, animated, config } from "react-spring"
import Brand from "./brand"
import BurgerMenu from "./burgerMenu"
import CollapseMenu from "./collapseMenu"
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
    justify-self: end;
    list-style-type: none;
    margin: auto 0;
    display: flex;
    align-items: center;

    & a {
      color: #55595c;

      border-bottom: 1px solid transparent;
      margin-right: 1.2rem;
      transition: all 300ms linear 0s;
      text-decoration: none;
      cursor: pointer;

      &:hover {
        color: ${color};
      }

      @media (max-width: 868px) {
        display: none;
      }
    }
  `

  const BtnNavHome = styled(Button)`
    background-color: ${color};
    border-color: ${color};
    color: white;
    :hover,
    :visited,
    :focus,
    :active {
      background-color: ${color} !important;
      border-color: ${color} !important;
      color: white;
    }

    @media (max-width: 868px) {
      display: none;
    }
  `

  const DropdownWrapper = styled.div`
    @media (max-width: 868px) {
      display: none;
    }
  `;

  return (
    <>
      <StyledNavBar style={barAnimation}>
        <FlexContainer>
          <Brand location={location} />
          <NavLinks>
            {location === "home" ? (
              _.keys(content.navBar).map((text, index) => {
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
                    <a href={`#${text}`}>{content.navBar[text]}</a>
                  </React.Fragment>
                )
              })
            ) : (
              <>
                <a href="#section-video">{content.navBar.services}</a>
                <a href="#section-plan"> {content.navBar.plan}</a>
                <a href="#section-photos"> {content.navBar.team}</a>
                <a href="#section-footer"> {content.navBar.contact}</a>
              </>
            )}

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
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #ffffff;
  z-index: 100;
  font-size: 1.2rem;

  .btn-light:hover {
    background-color: transparent;
    border-color: transparent;
  }
  .show > .btn-light.dropdown-toggle:focus {
    box-shadow: none;
  }
  .btn-light:not(:disabled):not(.disabled):active
    .show
    > .btn-light.dropdown-toggle {
    color: #212529;
    background-color: transparent;
    border-color: transparent;
  }
  .btn-light.focus,
  .btn-light:focus {
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
  }
  .dropdown-item {
    cursor: pointer;
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
  }
`

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 869px) {
    display: none;
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
