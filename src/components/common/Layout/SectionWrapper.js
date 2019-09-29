import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'Common'
import styled from 'styled-components'
import { desktopMaxWidth } from '../../../utils/constants'

const Wrapper = styled.div`
	padding-bottom: 4rem;
	background-position: right top;
	background-repeat: no-repeat;

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

	@media (max-width: ${desktopMaxWidth}) {
		flex-direction: column;
	}

	${({ innerJustify }) => `
	  justify-content: ${innerJustify};
  `}
`

const SectionWrapper = props => {
	const { children, innerJustify, ...bgProps } = props

	return (
		<Wrapper {...bgProps}>
			<InnerWrapper as={Container}>{children}</InnerWrapper>
		</Wrapper>
	)
}

SectionWrapper.propTypes = {
	backgroundURL: PropTypes.string,
	backgroundSize: PropTypes.string,
	innerJustify: PropTypes.string,
}

SectionWrapper.defaultProps = {
	backgroundURL: '../illustrations/overlay.svg',
	backgroundSize: 'contain',
	innerJustify: 'space-evenly',
}

export default SectionWrapper