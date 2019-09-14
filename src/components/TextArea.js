import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const StyledTextArea = styled.textarea`
	flex: 1;
	box-sizing: border-box;
	border: 1px solid #bfbfbf;
	padding: 0.8rem 1rem;
	border-radius: 7px;
	margin-bottom: 0.5rem;

	${({ error }) =>
		error &&
		`
		border-color: #ff4136;
	`}

	&::placeholder {
		color: #a7a7a7;
	}
`

const TextArea = props => {
	const { value, type, placeholder, onChangeText } = props

	return (
		<StyledTextArea
			value={value}
			type={type}
			onChange={str => onChangeText(str.target.value)}
			placeholder={placeholder}
		/>
	)
}

TextArea.propTypes = {
	value: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,

	onChangeText: PropTypes.func,
}

TextArea.defaultProps = {
	value: '',
	type: 'text',
	placeholder: '',

	onChangeText: () => {},
}

export default TextArea
