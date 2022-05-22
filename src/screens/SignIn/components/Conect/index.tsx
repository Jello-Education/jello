import React from 'react';

import { green, pink } from '@mui/material/colors';

import { Check, Container, TitleConect } from './stlyes';

const Conect = () => (
  <Container>
    <Check
      defaultChecked
      sx={{
        color: pink[800],
        '&.Mui-checked': {
          color: green[600],
        },
      }}
    />

    <TitleConect>Continuar conectado(a)</TitleConect>
  </Container>
);

export default Conect;
