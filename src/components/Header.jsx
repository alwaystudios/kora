import React from 'react'
import styled from 'styled-components'
import { mediumScreen, smallScreen } from '../breakpoints'

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #5a91e8;

  > .mobile {
    display: none;
  }

  @media only screen and (max-width: ${mediumScreen}px) {
    > .car {
      display: none;
    }
  }

  @media only screen and (max-width: ${smallScreen}px) {
    > .car {
      display: none;
    }

    > .logo {
      display: none;
    }

    > .mobile {
      display: block;
    }
  }
`

export const AppHeader = () => (
  <Header>
    <img className="mobile" src="./kora.png" alt="kora" />
    <img className="logo" src="./logo.jpg" alt="logo" />
    <img className="car" src="./car_image.jpg" alt="car_image" />
  </Header>
)
