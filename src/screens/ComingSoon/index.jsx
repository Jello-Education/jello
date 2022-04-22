import React from 'react';

import breve from '../../assets/svgs/em-breve.svg';
import Header from '../../components/Header';
import { ComingSoonContainer, Container } from './styles';

const ComingSoon = () => (
  <Container>
    <Header />

    {/* <SEO title="Em breve" /> */}

    <ComingSoonContainer>
      <img src={breve} alt="Imagem ilustrativa para 'Em breve'" />

      <h2>
        Um novo jeito de aprender está <br /> chegando, em breve...
      </h2>
      {/* <NewsletterSection /> */}
    </ComingSoonContainer>
  </Container>
  // <JelloInfo />
);

export default ComingSoon;
