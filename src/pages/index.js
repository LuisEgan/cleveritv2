import React from 'react'
import { Layout, SEO } from 'Common'
import { Intro, Skills, Contact, Blog } from 'Components/landing'

export default () => {
	return (
		<Layout>
			<SEO />
			<Intro />
			<Skills />
			<Contact />
			<Blog />
		</Layout>
	)
}
