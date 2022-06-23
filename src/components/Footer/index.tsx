import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { RiLinkedinFill } from 'react-icons/ri';
import { FaGooglePlay } from 'react-icons/fa';
import { AiFillApple } from 'react-icons/ai';

import { Container, Box, Title, Link, ContainerIcons, ContainerLinks, BoxIcon, Copy } from './style';

const index = () => {
  return (
    <>
    
    <Container>
        
        <Box>

          <div>

            <Title>Nossas redes</Title>

            <ContainerIcons>
              <BoxIcon><BsFacebook /></BoxIcon>
              <BoxIcon><RiLinkedinFill /></BoxIcon>
              <BoxIcon><BsInstagram /></BoxIcon>
              <BoxIcon><BsTwitter /></BoxIcon>
              <BoxIcon><BsYoutube /></BoxIcon>
            </ContainerIcons>

            <Title style={{ marginTop: '3%' }} >Nossos apps</Title>

            <div style={{ display: 'flex', justifyContent: 'flex-start' }} >
              <BoxIcon style={{ marginRight: "3%" }}><FaGooglePlay /></BoxIcon>
              <BoxIcon><AiFillApple /></BoxIcon>
            </div>

          </div>

        </Box>

        <Box>
          <Title>Educação</Title>

          <ContainerLinks>
            <Link>Aprenda novas coisas</Link>
            <Link>Crie seu curso</Link>
            <Link>Programa de afiliados</Link>
            <Link>Comunidade</Link>
          </ContainerLinks>

        </Box>

        <Box>
          <Title>Jello</Title>

          <ContainerLinks>
            <Link>A empresa</Link>
            <Link>Seja um patrocinador</Link>
            <Link>Guia de uso da marca</Link>
          </ContainerLinks>

        </Box>

        <Box>
          <Title>Suporte</Title>

          <ContainerLinks>
            <Link>Central de ajuda</Link>
            <Link>Termos de uso</Link>
            <Link>Termos de compra</Link>
            <Link>Política de privacidade</Link>
            <Link>Política de cookies</Link>
          </ContainerLinks>

        </Box>

    </Container>

    <Copy>Jello — 2021 © Todos os direitos reservados</Copy>

    </>
  )
}

export default index;