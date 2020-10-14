import React from 'react'
import { NEWS } from '../../App'
import { Img } from '../Img'
import { Page } from './Page'

export const News = () => (
  <Page title={NEWS}>
    <div>
      Zapewniamy, iż pomimo zagrożenia epidemiologicznego, sklep jest otwarty i oferujemy bezpieczną
      obsługę. W razie pytań lub wątpliwości zapraszamy do kontaktu mailowego lub telefonicznego.
    </div>
    <Img src="./car1.jpeg" alt="car" />
  </Page>
)
