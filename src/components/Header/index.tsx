import React from 'react';

import Blog from '../../assets/svgs/header/blog.svg';
import Creator from '../../assets/svgs/header/creator.svg';
import Logo from '../../assets/svgs/logo/Logo.svg';
import Menu from './components/Menu';
import { Container, ContainerImg, HeaderContent } from './styles';

interface HeaderProps {
  type: 'blog' | 'pattern' | 'creator' | 'welcome' | 'search';
}

const Header = ({ type }: HeaderProps) => {
  const selectImg = () => {
    switch (type) {
      case 'blog':
        return Blog;
      case 'creator':
        return Creator;
      default:
        return Logo;
    }
  };

  const imgHeader = selectImg();

  return (
    <Container>
      <HeaderContent>
        <Menu />
        <ContainerImg href="/blog">
          <img src={imgHeader} alt="Logo da Jello" />
        </ContainerImg>
      </HeaderContent>
    </Container>
  );
};

export default Header;
