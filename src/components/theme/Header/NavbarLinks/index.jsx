import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { desktopMaxWidth, colors, routes } from '../../../../utils/constants'

const links = [
	{ route: routes.HOME, label: 'Inicio' },
	{ route: routes.TEAMS, label: 'Equipo' },
	{ route: routes.PROJECTS, label: 'Proyectos' },
	{ route: routes.BLOG, label: 'Blog' },
	{ route: routes.JOBS, label: 'Reclutamiento' },
	{ route: routes.CONTACT, label: 'Contacto' },
]

const NavbarLinks = React.memo(({ desktop }) => {
	const [currentPage, setCurrentPage] = useState()

	useEffect(() => {
		links.some(({ route }) => {
			if (window.location.pathname === route) {
				setCurrentPage(route)
				return true
			}
			return false
		})
	}, [])

	return (
		<Wrapper desktop={desktop}>
			{links.map(({ route, label }) => (
				<NavLink
					isActive={currentPage === route}
					onClick={() => {
						setCurrentPage(route)
					}}
					key={label}
				>
					<Link to={route}>{label}</Link>
				</NavLink>
			))}
		</Wrapper>
	)
})

const NavLink = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 120%;

	&:hover {
		cursor: pointer;
	}

	a {
		height: 100%;
		display: flex;
		align-items: center;
		padding: 0 5px;
	}

	@media (max-width: ${desktopMaxWidth}) {
		height: 10%;
	}

	${({ isActive }) =>
		isActive &&
		`
			border-bottom: 3px solid ${colors.purple};
			color: ${colors.purple};
			font-weight: bold;
		`}
`

const Wrapper = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-around;
	padding: 0 15%;
	height: 100%;

	a {
		color: #6d6d6d;
		text-decoration: none;
	}

	${({ desktop }) =>
		desktop
			? `
			@media (max-width: ${desktopMaxWidth}) {
				display: none !important;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
			: `
			padding: 3rem;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`

export default NavbarLinks
