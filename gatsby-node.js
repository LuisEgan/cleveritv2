exports.createPages = async ({ actions, graphql, reporter }) => {
	const _genPage = (model, templateUrl) => {
		const { childMdx } = model
		if (!childMdx) return

		const {
			frontmatter: { slug },
		} = childMdx

		actions.createPage({
			path: slug,
			component: require.resolve(templateUrl),
			context: {
				slug,
			},
		})
	}

	try {
		let posts = await graphql(`
			query {
				allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
					nodes {
						childMdx {
							frontmatter {
								slug
							}
							excerpt
						}
					}
				}
			}
		`)

		let projects = await graphql(`
			query {
				allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
					nodes {
						childMdx {
							frontmatter {
								slug
								title
							}
							excerpt
							rawBody
						}
					}
				}
			}
		`)

		const errors = posts.errors || projects.errors
		if (errors) throw new Error(errors)

		posts = posts.data.allFile.nodes
		projects = projects.data.allFile.nodes

		posts.forEach(post => _genPage(post, './src/templates/post.js'))
		projects.forEach(project => _genPage(project, './src/templates/project.js'))
	} catch (error) {
		reporter.panic('failed to create posts', error)
	}
}

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
	const config = getConfig()
	if (stage.startsWith('develop') && config.resolve) {
		config.resolve.alias = {
			...config.resolve.alias,
			'react-dom': '@hot-loader/react-dom',
		}
	}
}
