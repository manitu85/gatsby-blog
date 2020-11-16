import styled from 'styled-components';
import { flexbox } from 'styled-system'
import propTypes from '@styled-system/prop-types'
import Box from './box.styled'


const Flex = styled(Box)`
  ${flexbox}
`

Flex.displayName = `Flex`

Flex.defaultProps = {
  display: `flex`,
}

Flex.propTypes = {
  ...propTypes.flexbox,
}

export default Flex