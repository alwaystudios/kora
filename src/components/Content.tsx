import React, { FunctionComponent } from 'react'
import { COMPANY, NEWS, SHOP } from '../App'
import { Company } from './pages/Company'
import { News } from './pages/News'
import { Shop } from './pages/Shop'

type Props = {
  tab: string
}

export const Content: FunctionComponent<Props> = ({ tab }) => (
  <>
    {tab === NEWS && <News />}
    {tab === COMPANY && <Company />}
    {tab === SHOP && <Shop />}
  </>
)
