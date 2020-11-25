import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
        title
        description
        siteUrl
        author
        keywords
        image
        }
      }
    }
  `)
  return result.site.siteMetadata
}

export default useSiteMetadata

// destructure data
// const {
//   title,
//   description,
//   siteUrl,
//   author,
//   keywords,
//   image,
// } = useSiteMetadata()
