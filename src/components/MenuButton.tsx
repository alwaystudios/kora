import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { tablet } from '../breakpoints'
import { changeTab } from '../redux/actions'

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
  margin-bottom: 1rem;

  &: focus {
    box-shadow: none;
    outline: black;
  }

  @media only screen and (max-width: ${tablet}px) {
    font-size: small;
  }
`

type Props = {
  text: string
}

export const MenuButton: FunctionComponent<Props> = ({ text }) => {
  const dispatch = useDispatch()
  return (
    <Button
      onClick={() => {
        dispatch(changeTab(text))
      }}
    >
      {text}
    </Button>
  )
}
