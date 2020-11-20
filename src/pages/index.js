import React from "react"
import styled from 'styled-components'

import useSiteMetadata from 'hooks/useSiteMetaData'
import Layout from "components/layout/layout"
import SEO from "components/seo/seo"

import { Text } from 'common/typography'
import avatar from 'assets/images/gravatar.jpg'
// import { Flex } from 'common/layout'


const BlogIndex = () => {
  const {
    description,
    author,
  } = useSiteMetadata()
  return (
    <Layout>
      <SEO title='home' />
      <User
        username={author}
        excerpt={description}
      />
    </Layout>
  )
}


export default BlogIndex

const User = ({ username, excerpt }) => (
  <UserWrapper>
    <Avatar />
    <Description>
      <Text as='p'>Hi people</Text>
      <Username>{username}</Username>
      <Excerpt>{excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)


const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px 12px;
`;

const Avatar = styled.img.attrs({
  src: avatar,
  alt: 'avatar'
})`
  flex: 0 0 150px;
  width: 150px;
  margin: 0;
  border-radius: 50%;
`;

const Description = styled.div`
  flex: 1;
  padding: 12px;
`;

const Username = styled.div`
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 1.25rem;
`

const Excerpt = styled.p`
  margin: 0;
`