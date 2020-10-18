import React, { FunctionComponent } from 'react'
import { SHOP } from '../tabs'
import { PageContent } from '../components/PageContent'

export const Shop: FunctionComponent = () => (
  <PageContent title={SHOP}>
    <div className="para">Przepraszamy. Strona w konstrukcji</div>
    <img style={{ width: 'fit-content' }} src="./car2.jpeg" alt="car" />
  </PageContent>
)
