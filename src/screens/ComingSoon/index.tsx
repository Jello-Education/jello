import React from 'react';

import breve from '../../assets/svgs/em-breve.svg';
import Header from '../../components/Header';
import { ComingSoonContainer, Container, Title } from './styles';

const ComingSoon = () => (
  <Container>
    <Header type="blog" />

    <ComingSoonContainer>
      <img src={breve} alt="Imagem ilustrativa para 'Em breve'" />

      <Title>
        Um novo jeito de aprender está <br /> chegando, em breve...
      </Title>
      {/* <NewsletterSection /> */}
    </ComingSoonContainer>
  </Container>
  // <JelloInfo />
);

export default ComingSoon;
