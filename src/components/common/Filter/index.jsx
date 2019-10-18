import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../../../utils/constants'

const Container = styled.div`
	display: flex;
	width: 100%;
	padding-bottom: 2%;
	align-items: center;
	-ms-overflow-style: none; // IE 10+
	scrollbar-width: none; // Firefox
	overflow-x: auto;

	&::-webkit-scrollbar {
		display: none; // Safari and Chrome
	}

	span {
		padding-right: 20px;
	}
`
const Option = styled.div`
	border: 2px solid transparent;
	border-radius: 15px;
	padding: 5px 15px;
	margin-right: 10px;

	&:hover {
		cursor: pointer;
	}
`

const Selected = styled(Option)`
	font-weight: bold;
	border: 2px solid ${colors.purple};
`

const Filter = props => {
	const { options, onSelect: onSelectProp } = props

	const [selected, setSelected] = useState(options[0])

	const onSelect = opt => {
		setSelected(opt)
		onSelectProp && onSelectProp(opt === 'Todas' ? 'all' : opt)
	}

	return (
		<Container>
			<span>Filtrar por: </span>

			{options.map(opt => {
				const optProps = opt === selected ? { as: Selected } : {}
				return (
					<Option key={opt} onClick={() => onSelect(opt)} {...optProps}>
						{opt}
					</Option>
				)
			})}
		</Container>
	)
}

Filter.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	onSelect: PropTypes.func.isRequired,
}

Filter.defaultProps = {
	options: [],
}

export default Filter
