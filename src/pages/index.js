import React from "react"
import styled from 'styled-components'

import Layout from "components/layout/layout"
import Image from "components/image/image"
import SEO from "components/seo/seo"

import { Text } from 'common/typography'
// import { Flex } from 'common/layout'
import avatar from 'assets/images/gravatar.jpg'



const BlogIndex = () => (
  <Layout>
    <SEO title="Home" />
    <User
      username='Alejandra Burke'
      excerpt='lorem20 dolor sit amet, consectetur adipiscing elit dolor sit amet, consectetur adipiscing onsectetur adipiscing elit dolor si'
    />
  </Layout>
)

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