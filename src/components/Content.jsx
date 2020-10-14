import React from 'react'
import { COMPANY, NEWS, SHOP } from '../App'
import { Company } from './pages/Company'
import { News } from './pages/News'
import { Shop } from './pages/Shop'

export const Content = ({ tab }) => (
  <>
    {tab === NEWS && <News className="main" />}
    {tab === COMPANY && <Company className="main" />}
    {tab === SHOP && <Shop className="main" />}
  </>
)
