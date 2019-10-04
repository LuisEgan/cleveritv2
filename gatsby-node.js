exports.createPages = async ({ actions, graphql, reporter }) => {
	const _genPostPage = model => {
		const { childMdx } = model
		if (!childMdx) return

		const {
			frontmatter: { slug },
		} = childMdx

		actions.createPage({
			path: slug,
			component: require.resolve('./src/templates/post.js'),
			context: {
				slug,
			},
		})
	}

	const _genProjectPage = project => {
		actions.createPage({
			path: project,
			component: require.resolve('./src/templates/project.js'),
			context: {
				project,
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

		const { errors } = posts
		if (errors) throw new Error(errors)

		posts = posts.data.allFile.nodes
		posts.forEach(post => _genPostPage(post))

		const projects = ['falabella', 'wom', 'dt', 'forus', 'cleverit-labs']
		projects.forEach(project => _genProjectPage(project))
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
