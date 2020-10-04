import React from 'react'
import styled from 'styled-components'
import { COMPANY, NEWS, SHOP } from '../App'
import { mediumScreen } from '../breakpoints'
import { MenuButton } from './MenuButton'

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #5a91e8;
  border: 0.25rem solid #5a91e8;

  @media only screen and (max-width: ${mediumScreen}px) {
    flex-direction: column;
  }

  > img {
    border-radius: 5px;
    margin-right: 5rem;

    @media only screen and (max-width: ${mediumScreen}px) {
      margin-right: 0;
    }
  }
`

export const AppHeader = ({ setTab, tab }) => (
  <Header>
    <img src="./kora.png" alt="kora" />
    <MenuButton setTab={setTab} text={NEWS} current={tab} />
    <MenuButton setTab={setTab} text={COMPANY} current={tab} />
    <MenuButton setTab={setTab} text={SHOP} current={tab} />
  </Header>
)
