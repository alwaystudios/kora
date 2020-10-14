import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  margin: 1rem;
`

const Title = styled.div`
  font-size: xx-large;
  margin-bottom: 1rem;
`

export const Page = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
)
