import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Workflow, JoinUs, Blog } from 'Components/home'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Workflow />
		<Blog />
		<JoinUs />
	</Layout>
)
