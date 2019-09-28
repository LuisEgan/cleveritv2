import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Workflow, JoinUs } from 'Components/home'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Workflow />
		<JoinUs />
	</Layout>
)
