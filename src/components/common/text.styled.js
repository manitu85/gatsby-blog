import styled from 'styled-components'
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
  ${typography}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`

Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes,
}

const Heading = Text.withComponent('h1')

const SubHeading = Text.withComponent('h2')

SubHeading.defaultProps = {
  fontSize: 3,
  lineHeight: 1.25,
  m: 0,
}

Heading.defaultProps = {
  fontSize: 5,
  lineHeight: 1.5,
  m: 0,
}

export {
  Text,
  Heading,
  SubHeading
}

// [https://github.com/johnpolacek/styled-system-html/]