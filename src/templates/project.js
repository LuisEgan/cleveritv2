import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import { Layout } from '../components/common/Layout/index'
import { Container as ContainerCommon } from '../components/common/Container'
import { ReadLink } from '../components/blog'
import { mobileMaxWidth } from '../utils/constants'

export const query = graphql`
	query($project: String!) {
		mdx(frontmatter: { tag: { eq: $project } }) {
			frontmatter {
				title
			}
			body
		}
	}
`

const Container = styled.div`
	padding-top: 20vh;

	@media (max-width: ${mobileMaxWidth}) {
		#projects {
			justify-content: center;
		}
	}
`

const ProjectTemplate = obj => {
	const {
		data: {
			mdx: {
				frontmatter: { title },
				body,
			},
		},
	} = obj

	return (
		<Layout>
			<Container as={ContainerCommon}>
				<MDXRenderer>{body}</MDXRenderer>
				<ReadLink to="/projects">&larr; volver al resto de proyectos</ReadLink>
			</Container>
		</Layout>
	)
}
export default ProjectTemplate
