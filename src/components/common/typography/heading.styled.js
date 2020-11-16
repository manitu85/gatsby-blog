import Text from './text.styled'

const Heading = Text.withComponent('h1')

Heading.defaultProps = {
  fontSize: 5,
  lineHeight: 1.5,
  mb: 0,
}

export default Heading