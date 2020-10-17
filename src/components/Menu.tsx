import React, { Dispatch, FunctionComponent, SetStateAction } from 'react'
import { MenuButton } from './MenuButton'
import { COMPANY, NEWS, SHOP } from '../App'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
`

type Props = {
  setTab: Dispatch<SetStateAction<string>>
}

export const Menu: FunctionComponent<Props> = ({ setTab }) => (
  <Container>
    <MenuButton setTab={setTab} text={NEWS} />
    <MenuButton setTab={setTab} text={COMPANY} />
    <MenuButton setTab={setTab} text={SHOP} />
  </Container>
)
