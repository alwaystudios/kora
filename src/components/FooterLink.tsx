import React, { FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { changeTab } from '../redux/actions'

const Container = styled.div`
  margin: 0.8rem;
  text-decoration: underline;

  &: hover {
    color: #5a91e8;
    cursor: pointer;
  }
`

type Props = {
  text: string
}

export const FooterLink: FunctionComponent<Props> = ({ text }) => {
  const dispatch = useDispatch()
  return <Container onClick={() => dispatch(changeTab(text))}>{text}</Container>
}
