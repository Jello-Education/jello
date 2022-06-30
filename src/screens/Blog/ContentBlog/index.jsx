import React from 'react';

import Header from '../../../components/Header';
import LeadCapture from '../../../components/LeadCapture';
import Content from './components/Content';
import HeaderContent from './components/HeaderContent';
import { Container } from './style';

const ContentBlog = () => (
  <>
    <Header type="blog" />
    <Container>
      <div>
        <HeaderContent />
        <Content />
        <LeadCapture />
      </div>
    </Container>
  </>
);

export default ContentBlog;
