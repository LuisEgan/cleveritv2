import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { ReadLink } from './read-link'

const PostPreview = ({ post }) => {
	return (
		<article>
			<Link to={post.slug}>
				<Image fluid={post.image.sharp.fluid} alt={post.title} />
			</Link>
			<div>
				<p>{post.excerpt}</p>
				<ReadLink to={post.slug}>Read this post &rarr; </ReadLink>
			</div>
		</article>
	)
}

export default PostPreview
