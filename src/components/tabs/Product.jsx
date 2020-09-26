import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 13rem;
  min-width: 13rem;
  max-height: 5rem;
  background-color: lightgray;
  margin: 0.5rem;
  border-radius: 15px;
`

const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: small;
  font-weight: bold;
`

export const Product = ({ product, src }) => (
  <Container>
    <img src={`suppliers/${src}.gif`} alt={product} />
    <Text>{product}</Text>
  </Container>
)
