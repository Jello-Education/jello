import React from 'react';

import ImagemUser from '../../../../../assets/icons/profile-icon-blog.svg';
import {
  AuthorImg,
  AuthorInformation,
  AuthorName,
  Container,
  Description,
  Header,
  Image,
  PublicationTime,
  Title,
  TitleHeader,
} from './style';

const Contentcard = ({ title, time, img, description, autor, link }) => (
  <Container href={link}>
    <Header>
      <TitleHeader>{title}</TitleHeader>
      <PublicationTime>{time}</PublicationTime>
    </Header>
    <Image src={img} alt="Imagem card" />
    <Title>Título</Title>
    <Description>{description}</Description>

    <AuthorInformation>
      <AuthorImg src={ImagemUser} alt="Imagem do usuário" />
      <AuthorName>Por {autor}</AuthorName>
    </AuthorInformation>
  </Container>
);

export default Contentcard;
