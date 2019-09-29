import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button } from 'Common'
import dev from 'Static/illustrations/dev.svg'
import { Details, Thumbnail } from './styles'
import SectionWrapper from '../../common/Layout/SectionWrapper'

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
			<img src={dev} alt="Cleverit" />
		</Thumbnail>
	</SectionWrapper>
)
