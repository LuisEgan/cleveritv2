import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'Common'
import styled from 'styled-components'
import { desktopMaxWidth } from '../../../utils/constants'

const Wrapper = styled.div`
	padding-bottom: 4rem;
	background-position: right top;
	background-repeat: no-repeat;
	overflow: hidden;

	${({ backgroundURL, backgroundSize }) => `
    background-image: url('${backgroundURL}');
    background-size: ${backgroundSize};
  `}
`

const InnerWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	flex-wrap: wrap;

	${({ innerJustify, innerHeight }) => `
		justify-content: ${innerJustify};
		${innerHeight ? `height: ${innerHeight}` : ``}
  `}

	@media (max-width: ${desktopMaxWidth}) {
		flex-direction: column;
		height: unset;
	}	
`

const SectionWrapper = props => {
	const { children, innerJustify, innerHeight, ...bgProps } = props

	return (
		<Wrapper {...bgProps}>
			<InnerWrapper
				as={Container}
				innerJustify={innerJustify}
				innerHeight={innerHeight}
			>
				{children}
			</InnerWrapper>
		</Wrapper>
	)
}

SectionWrapper.propTypes = {
	backgroundURL: PropTypes.string,
	backgroundSize: PropTypes.string,
	innerJustify: PropTypes.string,
	innerHeight: PropTypes.string,
}

SectionWrapper.defaultProps = {
	backgroundURL: '../illustrations/overlay.svg',
	backgroundSize: 'contain',
	innerJustify: 'space-evenly',
}

export default SectionWrapper
