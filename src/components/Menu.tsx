import React, { FunctionComponent } from 'react'
import { MenuButton } from './MenuButton'
import { COMPANY, NEWS, SHOP } from '../tabs'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
`

export const Menu: FunctionComponent = () => (
  <Container>
    <MenuButton text={NEWS} />
    <MenuButton text={COMPANY} />
    <MenuButton text={SHOP} />
  </Container>
)
