import React from 'react'
import styled from 'styled-components'
import { mediumScreen } from '../breakpoints'

const Button = styled.div`
  &: hover {
    border-bottom: 1px solid #ffffff;
  }

  cursor: pointer;
  font-size: large;
  font-weight: 100;
  white-space: nowrap;
  overflow: hidden;
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-bottom: 1px solid #5a91e8;
  margin-bottom: 1.5rem;

  &: focus {
    box-shadow: none;
    outline: black;
  }

  @media only screen and (max-width: ${mediumScreen}px) {
    font-size: small;
  }
`

export const MenuButton = ({ text, setTab }) => (
  <Button
    onClick={() => {
      setTab(text)
    }}
  >
    {text}
  </Button>
)
