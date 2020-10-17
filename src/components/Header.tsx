import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Links } from './Links'
import { Menu } from './Menu'
import { OpeningTimes } from './OpeningTimes'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: #5a91e8;
`

const Container = styled.div`
  margin: 1.5rem;
`

const Title = styled.div`
  font-size: xxx-large;
  font-weight: 200;
  text-shadow: 2px 2px gray;
`

const SubTitle = styled.div`
  font-size: large;
  font-weight: 400;
  font-style: italic;
`

export const AppHeader: FunctionComponent = () => (
  <Header>
    <Container>
      <Title>KORA</Title>
      <SubTitle>sklep autoczesci</SubTitle>
    </Container>
    <Menu />
    <Links />
    <OpeningTimes />
  </Header>
)
