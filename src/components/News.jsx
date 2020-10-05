import React from 'react'
import { NEWS } from '../App'
import { Box } from './Box'
import { P, Img } from './Core'

export const News = () => (
  <Box title={NEWS}>
    <P>
      Zapewniamy, iż pomimo zagrożenia epidemiologicznego, sklep jest otwarty i oferujemy bezpieczną
      obsługę. W razie pytań lub wątpliwości zapraszamy do kontaktu mailowego lub telefonicznego.
    </P>
    <Img src="./car1.jpeg" alt="car" />
  </Box>
)
