import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #585858;
  background-color: #f5f5f5;
  width: 100%;
  align-items: center;
  padding: 1rem;
  line-height: 1.5;
`

export const OpeningTimes: FunctionComponent = () => (
  <Container>
    <div style={{ fontSize: 'x-large' }}>Zapraszamy do sklepu</div>
    <div>Ul. Kościelna 7, 34-400 Nowy Targ</div>
    <div>
      <b>Czynne: Pon - Pt:</b> 9:00-17:00
    </div>
    <div>
      <b>Sobota:</b> nieczynne od 1-ego sierpnia 2024
    </div>
    <div style={{ textAlign: 'center' }}>
      <b>Telefon:</b> <a href="tel:+48 018 2669947">018 2669947</a> /{' '}
      <a href="tel:+48 606365122">606365122</a> / <a href="tel:+48 500210103">500210103</a>
    </div>
  </Container>
)
