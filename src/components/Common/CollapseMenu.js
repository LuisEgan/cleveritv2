import React from "react"
import styled from "styled-components"
import { Button, NavLink } from "react-bootstrap"
import { useSpring, animated } from "react-spring"
import ModalForm from "./ModalForm"
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

  const onChangeLang = language => {
    const { changeLang } = props
    changeLang(language)
  }

  const content = getData(location, lang)

  const BtnNav = styled(Button)`
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
  `
  const NavLinks = styled.ul`
    list-style-type: none;
    padding: 2rem 1rem 50rem 2rem;

    & li {
      transition: all 300ms linear 0s;
      z-index: 1;
      justify-content: center;
      text-align: center;
      padding-top: 1rem;
    }

    & a {
      font-size: 1.4rem;
      line-height: 2;
      color: black;

      text-decoration: none;
      cursor: pointer;
      z-index: 1;

      &:hover {
        color: ${color};
        border-bottom: 1px solid ${color};
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
          {location === "home" ? (
            _.keys(content.navBar).map((text, index) => {
              if (text === "quote") return
              return (
                <React.Fragment key={index}>
                  <li>
                    <a href={`#${text}`} onClick={props.handleNavbar}>
                      {content.navBar[text]}
                    </a>
                  </li>
                </React.Fragment>
              )
            })
          ) : (
            <>
              <li>
                <a href="#section-video" onClick={props.handleNavbar}>
                  {data.Development[props.app.lang].navBar.services}
                </a>
              </li>
              <li>
                <a href="#section-plan" onClick={props.handleNavbar}>
                  {" "}
                  {data.Development[props.app.lang].navBar.plan}
                </a>
              </li>
              <li>
                <a href="#section-photos" onClick={props.handleNavbar}>
                  {" "}
                  {data.Development[props.app.lang].navBar.team}
                </a>
              </li>
              <li>
                <a href="#section-footer" onClick={props.handleNavbar}>
                  {" "}
                  {data.Development[props.app.lang].navBar.contact}
                </a>
              </li>
            </>
          )}
          <li>
            <div className="dropdown  drop-watch ">
              <button
                className="btn btn-light dropdown-toggle "
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-globe icon-drop-nav"></i>
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <span
                  className="dropdown-item"
                  onClick={onChangeLang.bind(null, "es")}
                >
                  <i className="fas fa-globe"></i> Es
                </span>
                <span
                  className="dropdown-item"
                  onClick={onChangeLang.bind(null, "en")}
                >
                  <i className="fas fa-globe"></i> En
                </span>
              </div>
            </div>
          </li>
          <li>
            <BtnNav
              onClick={() => {
                props.showModalFunc(true)
              }}
            >
              Request a Quote
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
