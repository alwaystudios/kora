import React, { useState } from 'react'
import { Tabs } from './components/Tabs'
import { AppHeader } from './components/Header'
import styled from 'styled-components'
import { Footer } from './components/Footer'

export const COMPANY = 'O Firmie'
export const PRODUCTS = 'Produkty'
export const LINKS = 'Linki'
export const SHOP = 'Sklep'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`

const App = () => {
  const [tab, setTab] = useState(COMPANY)
  return (
    <Container>
      <AppHeader />
      <Tabs setTab={setTab} tab={tab} />
      <Footer setTab={setTab} />
    </Container>
  )
}

export default App
