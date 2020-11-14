import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.mainBlack};

  display: flex;
  justify-content: center;
  text-align: center;

  /* height: 100vh; */
`