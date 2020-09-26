import React from 'react'
import { Company } from './tabs/Company'
import { Products } from './tabs/Products'
import { Links } from './tabs/Links'
import { Shop } from './tabs/Shop'
import { Contact } from './tabs/Contact'
import styled from 'styled-components'
import { smallScreen } from '../breakpoints'
import { TabButton } from './TabButton'
import { COMPANY, LINKS, NEWS, PRODUCTS, SHOP } from '../App'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  > .tabs {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    border-bottom: 2px solid #5a91e8;
  }

  > .tab {
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media only screen and (max-width: ${smallScreen}px) {
      flex-direction: column-reverse;
    }
  }
`

export const Tabs = ({ setTab, tab }) => (
  <Container>
    <div className="tabs">
      <TabButton setTab={setTab} text={NEWS} current={tab} />
      <TabButton setTab={setTab} text={COMPANY} current={tab} />
      <TabButton setTab={setTab} text={PRODUCTS} current={tab} />
      <TabButton setTab={setTab} text={LINKS} current={tab} />
      <TabButton setTab={setTab} text={SHOP} current={tab} />
    </div>
    <div className="tab">
      <Contact />
      {tab === COMPANY && <Company />}
      {tab === PRODUCTS && <Products />}
      {tab === LINKS && <Links />}
      {tab === SHOP && <Shop />}
    </div>
  </Container>
)
