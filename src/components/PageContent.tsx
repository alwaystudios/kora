import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 5rem 2rem 5rem;
`

const Title = styled.div`
  font-size: xx-large;
  margin-bottom: 1rem;
`

type Props = {
  title: string
}

export const PageContent: FunctionComponent<Props> = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
)
