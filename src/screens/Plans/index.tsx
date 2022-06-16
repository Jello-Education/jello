import React from 'react';

import Image from '../../assets/image/Background-Plans.jpg';
import ImageInfo1 from '../../assets/image/Devices.jpg';
import ImageInfo2 from '../../assets/image/Offline.png';
import Header from '../../components/Header';
import {
  Box,
  BoxPrincipal,
  Button,
  ButtonBox,
  ContainerBox,
  ContainerBoxInfo,
  ContainerBoxs,
  ContainerButton,
  ContainerImage,
  ContainerImageInfo,
  ContainerInfo,
  ContainerPlans,
  ContainerTop,
  Description,
  DescriptionBox,
  DescriptionBoxPrincipal,
  DescriptionInfo,
  ImageBackground,
  ImageInfo,
  Title,
  TitleBox,
  TitleBoxPrincipal,
  TitleInfo,
  TitlePlans,
} from './style';

const Plans = () => (
  <div>

    <Header type={"creator"} />

    <ContainerInfo style={{ backgroundColor: '#DCDCDC' }}>
      <ContainerTop>
        <Title>Faça curso online com a gente</Title>
        <Description>
          Assine a plataforma Jello e tenha a oportunidade de fazer seu plano de
          estudo personalizado. Uma plataforma complemente diferente, mas com
          foco no seu objetivo.
        </Description>
        <ContainerButton>
          <Button>Ver planos</Button>
        </ContainerButton>
      </ContainerTop>

      <ContainerImageInfo>
        <ImageBackground src={Image} />
      </ContainerImageInfo>
    </ContainerInfo>

    <ContainerPlans>
      <TitlePlans>
        Comece a aprender agora mesmo!
        <br /> Conheça nossos planos:
      </TitlePlans>

      <ContainerBoxs>
        <ContainerBox>
          <Box>
            <TitleBox>STANDARD</TitleBox>
            <DescriptionBox>GRÁTIS</DescriptionBox>
          </Box>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ButtonBox>Quero esse!</ButtonBox>
          </div>
        </ContainerBox>

        <ContainerBox>
          <BoxPrincipal>
            <TitleBoxPrincipal>ESPINELO</TitleBoxPrincipal>
            <DescriptionBoxPrincipal>R$ 25,90</DescriptionBoxPrincipal>
          </BoxPrincipal>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ButtonBox>Quero esse!</ButtonBox>
          </div>
        </ContainerBox>

        <ContainerBox>
          <Box>
            <TitleBox>PALADIUM</TitleBox>
            <DescriptionBox>R$ 35,90</DescriptionBox>
          </Box>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ButtonBox>Quero esse!</ButtonBox>
          </div>
        </ContainerBox>
      </ContainerBoxs>
    </ContainerPlans>

    <ContainerImage>
      <ContainerBoxInfo>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ImageInfo src={ImageInfo1} />
        </div>
        <TitleInfo>Assista onde quiser</TitleInfo>
        <DescriptionInfo>
          Assista no site, no app do seu celular, ou no <br /> app do seu
          tablet. Estude onde e <br /> como você preferir.
        </DescriptionInfo>
      </ContainerBoxInfo>

      <ContainerBoxInfo>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ImageInfo src={ImageInfo2} />
        </div>
        <TitleInfo>
          Economize dados e <br /> assista off-line
        </TitleInfo>
        <DescriptionInfo>
          Já pensou em assistir aulas sem gastar seus <br /> dados móveis? Pois
          é, aqui na Jello você <br /> pode. É só baixar o nosso app e fazer o{' '}
          <br /> download das suas aulas.
        </DescriptionInfo>
      </ContainerBoxInfo>
    </ContainerImage>
  </div>
);

export default Plans;
