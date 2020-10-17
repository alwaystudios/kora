import React from 'react'
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

export const OpeningTimes = () => (
  <Container>
    <div style={{ fontSize: 'x-large' }}>Zapraszamy do sklepu</div>
    <b>czynne:</b>
    <div>
      <b>Pon - Pt:</b> 8:00-17:00
    </div>
    <div>
      <b>Sobota:</b> 9:00 - 13:00
    </div>
  </Container>
)
