import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0.8rem;
  text-decoration: underline;

  &: hover {
    color: #5a91e8;
    cursor: pointer;
  }
`

type Props = {
  setTab: Dispatch<SetStateAction<string>>
  text: string
}

export const FooterLink: FunctionComponent<Props> = ({ setTab, text }) => {
  return <Container onClick={() => setTab(text)}>{text}</Container>
}
