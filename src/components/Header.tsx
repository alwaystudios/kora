import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Contact } from './Contact'
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
  font-size: 60px;
  font-weight: 200;
  text-shadow: 2px 2px gray;
  text-align: center;
`

const SubTitle = styled.div`
  font-size: large;
  font-weight: 400;
  font-style: italic;
  text-align: center;
`

export const AppHeader: FunctionComponent = () => (
  <Header>
    <Container>
      <Title>KORA</Title>
      <SubTitle>Sklep motoryzacyjny - auto części</SubTitle>
    </Container>
    <Menu />
    <Contact />
    <OpeningTimes />
  </Header>
)
