import React from 'react'
import styled from 'styled-components'
import { smallScreen } from '../breakpoints'

const Container = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  padding: 1rem;
  padding-bottom: 2rem;
  margin: 1rem;
  border-radius: 15px;

  @media only screen and (max-width: ${smallScreen}px) {
    border: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
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
