import React from 'react'
import { SHOP } from '../../App'
import { Img } from '../Img'
import { MainContent } from './MainContent'

export const Shop = () => (
  <MainContent title={SHOP}>
    <Img src="./car2.jpeg" alt="car" />
  </MainContent>
)
