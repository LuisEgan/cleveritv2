import React from 'react'
import falabella from 'Static/pngs/contrataciones1.png'
import wom from 'Static/pngs/wom-portada.png'
import dt from 'Static/pngs/dt-portada.png'
import forus from 'Static/pngs/forus-app.png'
import cleveritlab from 'Static/pngs/cleveritlab.png'

export const desktopMaxWidth = '960px'
export const mobileMaxWidth = '480px'

export const colors = {
	purple: '#371A9F',

	gray: '#545454',
	grayLighter: '#F4F7F6',
	grayLight: '#D9D9D9',
}

export const fontSizes = {
	smaller: '6pt',
	small: '12pt',

	medium: '18pt',

	bigger: '33pt',
	big: '27pt',
}

export const routes = {
	HOME: '/',
	TEAMS: '/teams',
	PROJECTS: '/projects',
	BLOG: '/blog',
	JOBS: '/jobs',
	CONTACT: '/#contact',
}

export const techs = {
	'c#': 'C#',
	devops: 'DevOps',
	javascript: 'Javascript',
	qa: 'QA',
	unity: 'Unity',
}

export const blogTopics = {
	qa: 'QA',
	devops: 'DevOps',
	development: 'Development',
	bi: 'BI',
	alm: 'ALM',
}

export const projects = [
	{
		image: <img src={falabella} />,
		title: 'Falabella',
		path: '/falabella',
		description:
			'Hemos liderado más de 6 proyectos con Falabella retail, en los cuales hemos logrado desarrollar nuevas aplicaciones que apoyan la gestión de ventas y operaciones de Falabella retail.',
	},
	{
		image: <img src={wom} />,
		title: 'WOM',
		path: '/wom',
		description:
			'Creamos la primera integración de Latinoamérica de open shift (Red Hat) con Azure DevOps (Microsoft) y un innovador proyecto de transformación cultural y digital.',
	},
	{
		image: <img src={dt} />,
		path: '/dt',
		title: 'Dirección del trabajo',
		description:
			'Hemos apoyado al proceso de transformación digital de la DT, llevando a cabo el desarrollo de aplicativos que apoyan la generación de tramites de gran importancia para los trabajadores.',
	},
	{
		image: <img src={forus} />,
		path: '/forus',
		title: 'Forus',
		description:
			'Estamos liderando la revolución y transformación de aplicaciones core del negocio, para mejorar la propuesta de valor para los usuarios y clientes del mundo del retail.',
	},
	{
		image: <img src={cleveritlab} />,
		path: '/cleverit-labs',
		title: 'Cleverit Labs',
		description: '',
	},
	{
		image: <img src={cleveritlab} />,
		path: '/metro',
		title: 'Metro Santiago',
		description:
			'Acompañando a Metro desde hace tiempo con nuestra experiencia en construcción de aplicaciones empresariales y de alta calidad, al día de hoy todas se encuentra en producción, y además acompañandolos en la implementación de Azure DevOps.',
	},
]
