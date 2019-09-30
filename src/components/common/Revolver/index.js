import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import IT from 'Static/svgs/it.svg'

const positionItems = props => {
	const { items, circletSize } = props
	const circletChildren = items.length

	const angle = 360 / circletChildren

	let styles = ''

	let rotate = 0
	let rotateBack = 0
	for (let i = 1; i <= circletChildren; i++) {
		rotate = angle * i - angle
		rotateBack = -(rotate + 270)

		styles += `
      &:nth-of-type(${i}) {
        transform:
          rotate(${rotate}deg)
          translate(${circletSize / 2}em)
          rotate(${rotateBack}deg)
      }
    `
	}

	return css`
		${styles}
	`
}

const revolveAnim = props => {
	// return
	const {
		items,
		circletSize,
		circletRevolution,
		circletRevolutionReverse,
	} = props
	const circletChildren = items.length

	let styles = ''

	if (circletRevolution > 0) {
		const offset = circletRevolutionReverse ? -360 : 360

		styles += `
      transform: rotate(0deg);
		  animation: circlet-rotate ${circletRevolution}s linear infinite both;

      @keyframes circlet-rotate {
        to {
          transform: rotate(${offset}deg);
        }
      }

      > div {
    `

		let rotate = 0
		let revolveBack = 0
		for (let i = 1; i <= circletChildren; i++) {
			rotate = offset + (360 / circletChildren) * i
			revolveBack = (offset + rotate) * -1

			styles += `
        &:nth-of-type(${i}) {
          transform:
            rotate(${rotate}deg)
            translate(${circletSize / 2}rem)
            rotate(${rotate * -1}deg);

          animation:
            rotate-child-${i}
            ${circletRevolution}s
            linear
            infinite
            both;
        }

        @keyframes rotate-child-${i} {
          to {
            transform:
              rotate(${rotate}deg)
              translate(${circletSize / 2}rem)
              rotate(${revolveBack}deg);
          }
        }
      `
		}

		styles += '}'
	}

	return css`
		${styles}
	`
}

const RevolverStyles = styled.div`
	/* border: 0.25em dotted #bbdefb; */
	position: absolute;
	top: 0;
	margin: 0;
	padding: 0;
	border-radius: 50%;
	transform: rotate(270deg);

	${props => {
		const { circletSize } = props

		return `
      width: ${circletSize}rem;
      height: ${circletSize}rem;

      ${revolveAnim(props)}
    `
	}}
`

const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	${props => {
		const { circletSize } = props

		return `
      width: ${circletSize}rem;
      height: ${circletSize}rem;
    `
	}}
`

const Item = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;

	position: absolute;
	top: 50%;
	left: 50%;

	${props => {
		const { circletChildSize } = props

		return `
      width: ${circletChildSize}em;
      height: ${circletChildSize}em;
      margin: -${circletChildSize / 2}em;

      ${positionItems(props)}
    `
	}}
`

const Center = styled.div`
	width: 25%;

	> * {
		height: 100%;
		width: 100%;
	}
`

export const Revolver = props => {
	const { items } = props
	return (
		<Container {...props}>
			<Center>
				<IT />
			</Center>

			<RevolverStyles {...props}>
				{items.map(i => (
					<Item key={`${i}_${Math.random()}`} {...props}>
						{i}
					</Item>
				))}
			</RevolverStyles>
		</Container>
	)
}

Revolver.propTypes = {
	items: PropTypes.array,

	/* Diameter of circlet. */
	/* rem */
	circletSize: PropTypes.number,

	/* Size of each child inside the circlet. */
	/* em */
	circletChildSize: PropTypes.number,

	/* Amount of time necessary for children to make a full tour around the circle. */
	/* s */
	circletRevolution: PropTypes.number,

	/* Whether to make circlet turn anticlockwise instead of clockwise. */
	circletRevolutionReverse: PropTypes.bool,
}

Revolver.defaultProps = {
	items: [],
	circletSize: 25,
	circletChildSize: 5,
	circletRevolution: 30,
	circletRevolutionReverse: false,
}

export default Revolver
