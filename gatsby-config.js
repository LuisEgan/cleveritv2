module.exports = {
  siteMetadata: {
    title: `CleverIT | Software, DevOps, Consulting & Cognitive`,
    description: `CleverIT | Software, DevOps, Consulting & Cognitive`,
    author: `@CleverIT`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Software, DevOps, Consulting & Cognitive`,
        short_name: `CleverIT`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon/home/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    // **** disqus
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `cleveritgroup-com`,
      },
    },
    // **** mdx renderer
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Common/Layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              backgroundColor: `transparent`,
            },
          },
        ],
      },
    },
    // **** posts
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./posts",
      },
    },
    // **** drift
    {
      resolve: "gatsby-plugin-drift",
      options: {
        appId: "bm52u458p3r2",
      },
    },
    // **** fullstory
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: "Q6ZT3",
      },
    },
    // **** styled-components
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
