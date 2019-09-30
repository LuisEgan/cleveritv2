import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'

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

export const Intro = () => (
	<SectionWrapper>
		<Details>
			<h2>Ideas de negocio acompañadas de un gran equipo</h2>
			<h5>
				Somos un equipo multidisciplinario, capaz de acompañar tu proyecto desde
				etapas tempranas a su etapa de madurez y garantizar éxito.
			</h5>
			<Button as={AnchorLink} href="#contact">
				Ver casos de éxito
			</Button>
		</Details>
		<Thumbnail>
			{/* <img src={dev} alt="Cleverit" /> */}
			<Revolver
				// circletSize={10}
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
