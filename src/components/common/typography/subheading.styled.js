import Text from './text.styled'


const SubHeading = Text.withComponent('h2')

SubHeading.defaultProps = {
  fontSize: 3,
  lineHeight: 1.25,
  mb: 0,
}

export default SubHeading
