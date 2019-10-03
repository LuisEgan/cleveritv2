import { graphql, useStaticQuery } from 'gatsby'
import { techs } from '../utils/constants'

const processData = (data, tech) => {
	data = data.allFile.nodes.map(project => {
		const { childMdx } = project
		if (!childMdx) return

		const { frontmatter } = childMdx

		if (
			tech !== 'all' &&
			frontmatter.tech.toLowerCase() !== tech.toLowerCase()
		) {
			return
		}

		return {
			...frontmatter,
		}
	})

	return data.filter(i => i)
}

export const useJobs = tech => {
	try {
		if (tech !== 'all' && !techs[tech.toLowerCase()]) {
			let error = `Invalid tech, received ${tech} and must be one of: all |`
			for (const t in techs) {
				error += ` | ${t}`
			}
			throw new Error(error)
		}

		const data = useStaticQuery(graphql`
			query {
				allFile(filter: { sourceInstanceName: { eq: "jobs" } }) {
					nodes {
						childMdx {
							frontmatter {
								title
								tech
								creationDate
								tag
								description
							}
						}
					}
				}
			}
		`)

		return processData(data, tech)
	} catch (error) {
		console.error('error: ', error)
		return []
	}
}

// ! Not working (YET)
export const useJobsCSharp = () => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { sourceInstanceName: { eq: "c#" } }) {
				nodes {
					childMdx {
						frontmatter {
							title
							tech
							creationDate
							tag
						}
					}
				}
			}
		}
	`)

	return processData(data)
}

export const useJobsDevops = () => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { sourceInstanceName: { eq: "devops" } }) {
				nodes {
					childMdx {
						frontmatter {
							title
							tech
							creationDate
							tag
						}
					}
				}
			}
		}
	`)

	return processData(data)
}

export const useJobsJavascript = () => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { sourceInstanceName: { eq: "javascript" } }) {
				nodes {
					childMdx {
						frontmatter {
							title
							tech
							creationDate
							tag
						}
					}
				}
			}
		}
	`)

	return processData(data)
}

export const useJobsQa = () => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { sourceInstanceName: { eq: "qa" } }) {
				nodes {
					childMdx {
						frontmatter {
							title
							tech
							creationDate
							tag
						}
					}
				}
			}
		}
	`)

	return processData(data)
}

export const useJobsUnity = () => {
	const data = useStaticQuery(graphql`
		query {
			allFile(filter: { sourceInstanceName: { eq: "unity" } }) {
				nodes {
					childMdx {
						frontmatter {
							title
							tag
						}
					}
				}
			}
		}
	`)

	return processData(data)
}

// const useJobsByTech = tech => {
// 	tech = tech || 'all'

// 	try {
// 		if (!queries[tech] && tech !== 'all') {
// 			let error = `Invalid tech, received ${tech} and must be one of: all |`
// 			for (const tech in queries) {
// 				error += ` | ${tech}`
// 			}
// 			throw new Error(error)
// 		}

// 		if (tech === 'all') {
// 			let data = []
// 			for (const tech in queries) {
// 				data = [...data, processData(useStaticQuery(queries[tech]))]
// 			}
// 			return data
// 		}

// 		return queries[tech]()
// 	} catch (error) {
// 		console.error('error: ', error)
// 	}
// }
