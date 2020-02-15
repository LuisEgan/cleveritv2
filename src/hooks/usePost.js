import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  let data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
        nodes {
          childMdx {
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
    }
  `)

  data = data.allFile.nodes.map(post => {
    const { childMdx } = post
    if (!childMdx) return

    const { frontmatter, excerpt } = childMdx

    return {
      ...frontmatter,
      excerpt,
    }
  })

  return data.filter(i => i)
}

export default usePosts
