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
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: 'posts',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './static/jpgs',
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
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
				icon: './static/favicon/IT.ico',
			},
		},
		'gatsby-plugin-offline',
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
	],
}
