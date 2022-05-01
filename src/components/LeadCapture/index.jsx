import React from 'react';

import Correio from '../../assets/svgs/correio.svg';
import InputLogin from '../InputLogin';
import {
  BlueHighlight,
  Caption,
  Container,
  Content,
  ContentInput,
  Image,
  Newsletter,
  PinkHighlight,
  Title,
} from './style';

const LeadCapture = () => (
  <Container>
    <Image src={Correio} alt="Correio" />
    <Content>
      <Title>Seja o primeiro a ficar sabendo!</Title>
      <Newsletter>
        <Caption>
          Assine <BlueHighlight>gratuitamente</BlueHighlight> a Newsletter do
          nosso blog para receber em primeira mão{' '}
          <PinkHighlight>os melhores conteúdos sobre educação!</PinkHighlight>
        </Caption>
        <ContentInput>
          <InputLogin placeholder="Nome" />
          <InputLogin placeholder="E-mail" />
        </ContentInput>
      </Newsletter>
    </Content>
  </Container>
);

export default LeadCapture;
