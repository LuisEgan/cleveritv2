import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { COLORS } from "../../utils/page"

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 2%;
  align-items: center;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
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
  border: 2px solid ${COLORS.default};
`

const Filter = props => {
  const { options, onSelect: onSelectProp } = props

  const [selected, setSelected] = useState(options[0])

  const onSelect = opt => {
    setSelected(opt)
    onSelectProp && onSelectProp(opt === "Todas" ? "all" : opt)
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
