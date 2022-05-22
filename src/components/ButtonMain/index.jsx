import React from 'react';

import { Container } from './style';

const ButtonMain = ({ title, colorFont, background, top, bottom }) => (
  <Container
    colorFont={colorFont}
    background={background}
    bottom={bottom}
    top={top}
  >
    {title}
  </Container>
);

export default ButtonMain;
