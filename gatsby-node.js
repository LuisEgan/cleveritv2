exports.createPages = async ({ actions, graphql, reporter }) => {
	const result = await graphql(`
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

	if (result.errors) {
		reporter.panic('failed to create posts', result.errors)
	}

	const posts = result.data.allFile.nodes

	posts.forEach(post => {
		const { childMdx } = post
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
	})
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
