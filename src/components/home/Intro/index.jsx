import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'Common'

import Wom from 'Static/svgs/wom.svg'
import Saam from 'Static/svgs/saam.svg'
import Metro from 'Static/svgs/metro_santiago.svg'
import Falabella from 'Static/svgs/falabella.svg'
import Dt from 'Static/svgs/dt_Logo.svg'
import Forus from 'Static/svgs/forus.svg'
import ChileCompra from 'Static/svgs/logo-chilecompra.svg'

import { Revolver } from '../../common'
import SectionWrapper from '../../common/Layout/SectionWrapper'
import { Details, Thumbnail } from './styles'
import { routes } from '../../../utils/constants'

export const Intro = () => {
	return (
		<SectionWrapper backgroundURL="">
			<Details>
				<h2>Ideas de negocio acompañadas de un gran equipo</h2>
				<h5>
					Somos un equipo multidisciplinario, capaz de acompañar tu proyecto
					desde etapas tempranas a su etapa de madurez y garantizar éxito.
				</h5>
				<Button as={Link} to={routes.PROJECTS} offset={100}>
					Ver casos de éxito
				</Button>
			</Details>
			<Thumbnail>
				<Revolver
					items={[
						<Wom />,
						<Saam />,
						<Metro />,
						<Falabella />,
						<Dt />,
						<ChileCompra />,
						<Forus />,
					]}
				/>
			</Thumbnail>
		</SectionWrapper>
	)
}
