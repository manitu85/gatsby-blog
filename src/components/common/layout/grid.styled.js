import styled from 'styled-components';
import { grid } from 'styled-system'
import propTypes from '@styled-system/prop-types'

import Box from './box.styled'

const Grid = styled(Box)`
  ${grid}
`

Grid.displayName = `Grid`

Grid.defaultProps = {
  display: `grid`,
}

Grid.propTypes = {
  ...propTypes.flexbox,
}

export default Grid