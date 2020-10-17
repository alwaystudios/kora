import React, { FunctionComponent } from 'react'
import { NEWS } from '../../App'
import { Img } from '../Img'
import { MainContent } from './MainContent'

export const News: FunctionComponent = () => (
  <MainContent title={NEWS}>
    <div className="para">
      Zapewniamy, iż pomimo zagrożenia epidemiologicznego, sklep jest otwarty i oferujemy bezpieczną
      obsługę. W razie pytań lub wątpliwości zapraszamy do kontaktu mailowego lub telefonicznego.
    </div>
    <Img src="./car1.jpeg" alt="car" />
  </MainContent>
)
