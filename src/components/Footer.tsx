import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Menu } from './Menu'

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  color: #ffffff;
  background-color: #5a91e8;
  border-top: 1px solid #000000;
`

export const Footer: FunctionComponent = () => (
  <Container>
    <Menu />
  </Container>
)
