import { graphql } from 'gatsby'

export const GET_SINGLE_IMAGE = graphql`
{
  img1: file(relativePath: { eq: "meaning.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 750) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// export default GET_SINGLE_IMAGE