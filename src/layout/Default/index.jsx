import React from 'react';

import { Container, Content } from './style';

const DefaultLayout = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

export default DefaultLayout;
