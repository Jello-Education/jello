import React from 'react';

import IconsFooter from '../../../assets/svgs/IconsFooter.svg';
import ImageLogo from '../../../assets/svgs/logo/Logo.svg';
import {
  Border,
  Button,
  Checkbox,
  Circle,
  Circle2,
  ContainerButton,
  ContainerInput,
  ContainerLogo,
  ContainerPrivacity,
  ContainerStatus,
  Description,
  ImageFooter,
  Input,
  Logo,
  Title,
  TitleInput,
} from './style';

const index = () => (
  <div>
    <ContainerLogo>
      <Logo src={ImageLogo} alt="Logo Jello" />
    </ContainerLogo>

    <ContainerStatus>
      <Circle />
      <Border />
      <Circle2 />
      <Border />
      <Circle2 />
    </ContainerStatus>

    <ContainerInput>
      <Title>Crie sua conta</Title>

      <div style={{ display: 'grid', justifyContent: 'center' }}>
        <TitleInput>Nome Completo</TitleInput>
        <Input type="text" placeholder="Ex: Felipe Silva" />

        <TitleInput>E-mail</TitleInput>
        <Input type="text" placeholder="Ex: seuemail@gmail.com" />

        <TitleInput>Celular</TitleInput>
        <Input type="text" placeholder="Ex: 41 9 9999-9999" />
      </div>

      <ContainerPrivacity>
        <Checkbox />

        <Description>
          Ao informar seus dados e seguir para a próxima etapa, <br /> você
          automaticamente concorda com nossa{' '}
          <strong style={{ color: '#FD3373' }}>
            Política <br /> de Privacidade.
          </strong>
        </Description>
      </ContainerPrivacity>

      <ContainerButton>
        <Button>Continuar</Button>
      </ContainerButton>
    </ContainerInput>

    <ImageFooter src={IconsFooter} alt="Icons Footer" />
  </div>
);

export default index;
