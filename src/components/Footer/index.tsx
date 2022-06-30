import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FaGooglePlay } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';

import {
  Box,
  BoxIcon,
  ClickLink,
  Container,
  ContainerIcons,
  ContainerLinks,
  Copy,
  Title,
} from './style';

const Footer = () => (
  <>
    <Container>
      <Box>
        <div>
          <Title>Nossas redes</Title>

          <ContainerIcons>
            <BoxIcon>
              <BsFacebook />
            </BoxIcon>
            <BoxIcon>
              <RiLinkedinFill />
            </BoxIcon>
            <BoxIcon>
              <BsInstagram />
            </BoxIcon>
            <BoxIcon>
              <BsTwitter />
            </BoxIcon>
            <BoxIcon>
              <BsYoutube />
            </BoxIcon>
          </ContainerIcons>

          <Title style={{ marginTop: '3%' }}>Nossos apps</Title>

          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <BoxIcon style={{ marginRight: '3%' }}>
              <FaGooglePlay />
            </BoxIcon>
            <BoxIcon>
              <AiFillApple />
            </BoxIcon>
          </div>
        </div>
      </Box>

      <Box>
        <Title>Educação</Title>

        <ContainerLinks>
          <ClickLink>Aprenda novas coisas</ClickLink>
          <ClickLink>Crie seu curso</ClickLink>
          <ClickLink>Programa de afiliados</ClickLink>
          <ClickLink>Comunidade</ClickLink>
        </ContainerLinks>
      </Box>

      <Box>
        <Title>Jello</Title>

        <ContainerLinks>
          <ClickLink>A empresa</ClickLink>
          <ClickLink>Seja um patrocinador</ClickLink>
          <ClickLink>Guia de uso da marca</ClickLink>
        </ContainerLinks>
      </Box>

      <Box>
        <Title>Suporte</Title>

        <ContainerLinks>
          <ClickLink>Central de ajuda</ClickLink>
          <ClickLink>Termos de uso</ClickLink>
          <ClickLink>Termos de compra</ClickLink>
          <ClickLink>Política de privacidade</ClickLink>
          <ClickLink>Política de cookies</ClickLink>
        </ContainerLinks>
      </Box>
    </Container>

    <Copy>Jello — 2021 © Todos os direitos reservados</Copy>
  </>
);

export default Footer;
