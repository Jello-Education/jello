import React from 'react';

import Header from '../../../components/Header';
import Content from './components/Content';
import HeaderContent from './components/HeaderContent';
import { Container } from './style';

const ContentBlog = () => (
  <>
    <Header />
    <Container>
      <div>
        <HeaderContent />
        <Content />
      </div>
    </Container>
  </>
);

export default ContentBlog;
