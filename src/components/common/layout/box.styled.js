import styled from 'styled-components';
import {
  space,
  color,
  layout,
  border,
  shadow,
  background,
  position,
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

const Box = styled.div`
  ${space}
  ${color}
  ${layout}
  ${border}
  ${shadow}
  ${background}
  ${position}
`
Box.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.layout,
  ...propTypes.border,
  ...propTypes.shadow,
  ...propTypes.background,
  ...propTypes.position,
}

export default Box 