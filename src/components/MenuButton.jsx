import React from 'react'
import styled, { css } from 'styled-components'
import { mediumScreen } from '../breakpoints'

const Button = styled.div`
  &: hover {
    background-color: lightgray;
  }

  ${({ current }) =>
    `${
      current
        ? css`
            color: #5a91e8;
            background-color: white;
            &: hover {
              background-color: white;
            }
          `
        : css`
            background-color: #5a91e8;
          `
    }`}

  cursor: pointer;
  padding: 0.75rem 2rem 0.75rem 2rem;
  width: fit-content;
  font-size: x-large;

  &: focus {
    box-shadow: none;
    outline: black;
  }

  @media only screen and (max-width: ${mediumScreen}px) {
    font-size: large;
    padding: 0.5rem;
  }
`

export const MenuButton = ({ text, setTab, current }) => {
  const isCurrent = text === current
  return (
    <Button
      current={isCurrent}
      onClick={() => {
        setTab(text)
      }}
    >
      {text}
    </Button>
  )
}
