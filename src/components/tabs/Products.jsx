import React from 'react'
import styled from 'styled-components'
import { PRODUCTS } from '../../App'
import { Box } from '../Box'
import { Product } from './Product'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
`

export const Products = () => (
  <Box title={PRODUCTS}>
    <Container>
      <Product product="Amortyzatory" src="magnum" />
      <Product product="Sprzęgła, łożyska sprzęgłowe" src="jc" />
      <Product product="Części układu elektrycznego i układu chłodzenia, pompy wody" src="rw" />
      <Product product="Dr±żki kierownicze" src="555" />
      <Product product="Filtry" src="clean_filters" />
      <Product product="Paski rozrz±du" src="3_star" />
      <Product product="Uszczelnienia silnika" src="nps" />
      <Product product="Pier¶cienie" src="hastings" />
      <Product product="Rolki napinaczy i łożyska kół" src="nsk" />
      <Product product="" src="" />
    </Container>
  </Box>
)
