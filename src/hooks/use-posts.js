import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
	const data = useStaticQuery(graphql`
		query {
			allMdx {
				nodes {
					frontmatter {
						title
						slug
						author
						tag
						creationDate
						image {
							sharp: childImageSharp {
								fluid(maxWidth: 349, maxHeight: 302) {
									...GatsbyImageSharpFluid_withWebp
								}
							}
						}
					}
					excerpt
				}
			}
		}
	`)

	return data.allMdx.nodes.map(post => {
		const {
			frontmatter: { title, author, slug, image, tag, creationDate },
			excerpt,
		} = post

		return {
			title,
			author,
			slug,
			image,
			tag,
			creationDate,
			excerpt,
		}
	})
}

export default usePosts
