import React from 'react';

import ImagemUser from '../../../../../assets/icons/profile-icon-blog.svg';
import Compartilhamento from '../../../../../assets/icons/socialNetwork/compartilhamento.svg';
import Facebook from '../../../../../assets/icons/socialNetwork/facebook.svg';
import Instagram from '../../../../../assets/icons/socialNetwork/instagram.svg';
import Linkedin from '../../../../../assets/icons/socialNetwork/linkedin.svg';
import {
  AuthorDescription,
  AuthorImg,
  AuthorName,
  ClickNetwork,
  Container,
  ContainerAuthor,
  ContainerNetwork,
  Description,
  SeparatorLine,
  Title,
  TypeContent,
} from './style';

const HeaderContent = () => {
  const network = [
    {
      img: Facebook,
      link: 'https://www.linkedin.com/company/jello-tecnologia-educacional',
      description: 'Facebook',
    },
    {
      img: Instagram,
      link: 'https://www.instagram.com/jello.tec/',
      description: 'Instagram',
    },
    {
      img: Linkedin,
      link: 'https://www.linkedin.com/company/jello-tecnologia-educacional',
      description: 'Linkedin',
    },
  ];
  return (
    <Container>
      <TypeContent>Tipo de conteúdo</TypeContent>
      <Title>Dicas de Inglês: Como usar This, That, These e Those</Title>
      <Description>
        Demonstrative pronouns em português os Pronomes demonstrativos (this,
        that, these e those).
      </Description>

      <ContainerAuthor>
        <AuthorDescription>
          <AuthorImg src={ImagemUser} alt="Imagem do usuário" />
          <AuthorName>Por Fulano de Tal</AuthorName>
        </AuthorDescription>

        <ContainerNetwork>
          <ClickNetwork
            href="https://www.linkedin.com/company/jello-tecnologia-educacional"
            target="_blank"
          >
            <img src={Compartilhamento} alt="Compartilha" />
          </ClickNetwork>
          {network.map((i) => (
            <ClickNetwork href={i.link} target="_blank">
              <img src={i.img} alt={i.description} />
            </ClickNetwork>
          ))}
        </ContainerNetwork>
      </ContainerAuthor>

      <SeparatorLine />
    </Container>
  );
};

export default HeaderContent;
