import styled from 'styled-components'
// import propTypes from '@styled-system/prop-types'
import {
  space,
  typography,
  color,
  fontSize,
  width,
  fontWeight,
  lineHeight,
} from 'styled-system'


const Text = styled.div`
  ${space}
  ${width}
  ${color}
  ${typography}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
`

Text.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes,
}


export default Text


// [https://github.com/johnpolacek/styled-system-html/]