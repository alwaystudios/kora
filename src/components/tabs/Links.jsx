import React from 'react'
import styled from 'styled-components'
import { Box } from '../Box'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
`

export const Links = () => (
  <Box title="Linki">
    <Container>
      <div>
        JC AUTO - <a href="www.jcauto.pl">www.jcauto.pl</a>
      </div>
      <div>
        HIPOL - <a href="www.hipol.pl">www.hipol.pl</a>
      </div>
      <div>
        TUNING JC AUTO - <a href="www.tuning.jcauto.pl">www.tuning.jcauto.pl</a>
      </div>
      <div>
        HENGST - <a href="www.hengst.de">www.hengst.de</a>
      </div>
      <div>
        JAN MOR - <a href="www.janmor.pl">www.janmor.pl</a>
      </div>
      <div>
        NSK - <a href="www.nsk.com">www.nsk.com</a>
      </div>
      <div>
        WALKER - <a href="www.walkerexhaust.com">www.walkerexhaust.com</a>
      </div>
      <div>
        DELCO REMY - <a href="www.delcoremy.com">www.delcoremy.com</a>
      </div>
      <div>
        SHELL - <a href="www.shell.com/pl">www.shell.com/pl</a>
      </div>
      <div>
        VALEO - <a href="www.valeo.pl">www.valeo.pl</a>
      </div>
      <div>
        TIMKEN - <a href="www.timken.com">www.timken.com</a>
      </div>
      <div>
        OPTIMAL - <a href="www.optimal.pl">www.optimal.pl</a>
      </div>
      <div>
        LUK - <a href="www.luk.de">www.luk.de</a>
      </div>
      <div>
        BOSH - <a href="www.bosh.pl">www.bosh.pl</a>
      </div>
      <div>
        KYB - <a href="www.kyb.com ">www.kyb.com </a>
      </div>
    </Container>
  </Box>
)
