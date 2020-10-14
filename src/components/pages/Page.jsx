import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
