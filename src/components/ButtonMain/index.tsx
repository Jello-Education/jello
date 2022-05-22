import React from 'react';

import { Container } from './style';

interface Props {
  title: string;
  colorFont?: string;
  background?: string;
  top?: number;
  bottom?: number;
}

const ButtonMain = ({ title, colorFont, background, top, bottom }: Props) => (
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
