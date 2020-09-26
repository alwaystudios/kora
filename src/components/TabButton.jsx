import React from 'react'
import styled, { css } from 'styled-components'
import { mediumScreen, smallScreen } from '../breakpoints'

const Button = styled.div`
  &: hover {
    background-color: lightgray;
  }

  ${({ current }) =>
    `${
      current
        ? css`
            color: white;
            background-color: #5a91e8;
            &: hover {
              background-color: #5a91e8;
            }
          `
        : css`
            background-color: white;
          `
    }`}

  cursor: pointer;
  padding: 0.75rem 2rem 0.75rem 2rem;
  width: fit-content;
  font-size: x-large;
  border-top-left-radius: 5%;
  border-top-right-radius: 5%;

  &: focus {
    box-shadow: none;
    outline: black;
  }

  @media only screen and (max-width: ${mediumScreen}px) {
    font-size: large;
    padding: 0.5rem;
  }

  @media only screen and (max-width: ${smallScreen}px) {
    font-size: small;
    padding: 0.5rem;
  }
`

export const TabButton = ({ text, setTab, current }) => {
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
