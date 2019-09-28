import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Workflow, JoinUs, Contact, Blog } from 'Components/home'

export default () => (
	<Layout>
		<SEO />
		<Intro />
		<Workflow />
		<Blog />
		<JoinUs />
		<Contact />
	</Layout>
)
