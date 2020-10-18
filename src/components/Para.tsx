import styled from 'styled-components'
import { mobile } from '../breakpoints'

export const Para = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem 1rem;
  margin-bottom: 1rem;
  text-align: center;
  font-size: x-large;
  font-weight: 100;

  @media only screen and (max-width: ${mobile}px) {
    font-size: large;
  }
`
