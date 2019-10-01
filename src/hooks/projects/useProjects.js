import { graphql, useStaticQuery } from 'gatsby'

const proccessData = data => {
	data = data.allFile.nodes.map(project => {
		const { childMdx } = project
		if (!childMdx) return

		const {
			frontmatter: { title, author, slug, image, tag, creationDate },
			excerpt,
		} = childMdx

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

	return data.filter(i => i)
}

export const useProjectFalabella = () => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { sourceInstanceName: { eq: "falabella" } }) {
				nodes {
					childMdx {
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`)

	return proccessData(data)
}

export const useProjectWom = () => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { sourceInstanceName: { eq: "wom" } }) {
				nodes {
					childMdx {
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`)

	return proccessData(data)
}

export const useProjectWhyx = () => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { sourceInstanceName: { eq: "whyx" } }) {
				nodes {
					childMdx {
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`)

	return proccessData(data)
}

export const useProjectCencosud = () => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { sourceInstanceName: { eq: "cencosud" } }) {
				nodes {
					childMdx {
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`)

	return proccessData(data)
}
