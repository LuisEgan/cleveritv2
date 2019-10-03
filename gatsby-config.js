const path = require('path')
const config = require('./data/config')

require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: config.defaultTitle,
		description: config.defaultDescription,
		author: config.author,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				defaultLayouts: {
					default: require.resolve('./src/components/common/Layout/index.jsx'),
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
		{
			resolve: `gatsby-plugin-disqus`,
			options: {
				shortname: `www-cleverit-cl`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [`gatsby-remark-images`],
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /svgs/,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: config.themeColor,
				showSpinner: false,
			},
		},
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: config.googleAnalyticsID,
				head: true,
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: config.defaultTitle,
				short_name: 'starter',
				start_url: '/',
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'minimal-ui',
<<<<<<< HEAD
=======
				icon: './static/favicon/IT.ico',
>>>>>>> 54a203130c0fc8d2b8413325592379e582d8181a
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					Components: path.resolve(__dirname, 'src/components'),
					Common: path.resolve(__dirname, 'src/components/common'),
					Static: path.resolve(__dirname, 'static/'),
					Theme: path.resolve(__dirname, 'src/components/theme'),
					Data: path.resolve(__dirname, 'data/config'),
				},
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './static/jpgs',
			},
		},

		// **********************
		// * GraphQL MD readings
		// **********************

		// **** posts
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: './posts',
			},
		},

		// **** projects
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'falabella',
				path: './projects/falabella',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'wom',
				path: './projects/wom',
			},
		},

		// **** jobs
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'jobs',
				path: './jobs',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'c#',
				path: './jobs/c#',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'devops',
				path: './jobs/devops',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'javascript',
				path: './jobs/javascript',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'qa',
				path: './jobs/qa',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'unity',
				path: './jobs/unity',
			},
		},
	],
}
