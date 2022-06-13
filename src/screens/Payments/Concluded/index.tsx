import React from 'react';

import IconsFooter from '../../../assets/svgs/IconsFooter.svg';
import ImageLogo from '../../../assets/svgs/logo/Logo.svg';
import { BsCheckLg } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';

import {
  Border,
  Circle,
  ContainerLogo,
  ContainerStatus,
  ImageFooter,
  Logo,
  Container,
  Title,
  Description,
  ContainerCheck,
  Br,
} from './style';

const index = () => {

  return (
    <div>
      <ContainerLogo>
        <Logo src={ImageLogo} alt="Logo Jello" />
      </ContainerLogo>

      <ContainerStatus>
        <Circle style={{ background: "#44f9bd", color: '#000', fontSize: 10 }}>
          <BsCheckLg />
        </Circle>
        <Border style={{ background: "#44f9bd" }} />
        <Circle style={{ background: "#44f9bd", color: '#000', fontSize: 10 }}>
          <BsCheckLg />
        </Circle>
        <Border style={{ background: "#44f9bd" }} />
        <Circle style={{ background: "#44f9bd", color: '#000', fontSize: 10 }}>
          <BsCheckLg />
        </Circle>
      </ContainerStatus>

      <Container>
        <div>
          <Title>Seu pagamento está <br /> sendo processado ... </Title>
          <Description>Fique atento ao seu e-mail para mais informações a respeito da <Br /> sua solitação e pagamento da mesma.</Description>
        </div>
      </Container>

      <ContainerCheck>
        <AiFillCheckCircle />
      </ContainerCheck>

      <ImageFooter src={IconsFooter} alt="Icons Footer" />

    </div>
  );
};

export default index;
