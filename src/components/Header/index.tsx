import React from 'react';

import LogoBlog from '../../assets/svgs/logo/logoBlog.svg';
import { Container, ContainerImg, HeaderContent } from './styles';


const Header = () => (
  <Container>
    <HeaderContent>
      <ContainerImg href="/blog">
        <img src={LogoBlog} alt="Logo da Jello" />
      </ContainerImg>
    </HeaderContent>
  </Container>
);

export default Header;
