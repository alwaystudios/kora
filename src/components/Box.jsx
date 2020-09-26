import React from 'react'
import styled from 'styled-components'
import { mediumScreen, smallScreen } from '../breakpoints'

const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  border: 1px solid black;
  padding: 1rem;
  padding-bottom: 2rem;
  margin: 1rem;
  border-radius: 15px;

  @media only screen and (max-width: ${mediumScreen}px) {
    min-width: 19rem;
  }

  @media only screen and (max-width: ${smallScreen}px) {
    min-width: 0;
  }

  height: fit-content;
  max-width: 50rem;
  width: fit-content;
`

const Title = styled.p`
  font-size: x-large;
  margin-bottom: 1rem;
  height: fit-content;
`

export const Box = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    {children}
  </Container>
)
