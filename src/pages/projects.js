import React from 'react'
import { Layout, SEO } from 'Common'
import { Header, ProjectsGrid, Projects } from '../components/projects'

export default () => (
	<Layout>
		<SEO />
		<Header />
		<ProjectsGrid />
	</Layout>
)
