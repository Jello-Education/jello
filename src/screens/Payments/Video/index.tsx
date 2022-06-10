import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

import IconsFooter from '../../../assets/svgs/IconsFooter.svg';
import ImageLogo from '../../../assets/svgs/logo/Logo.svg';
import {
  Border,
  Button,
  Circle,
  ContainerButton,
  ContainerLogo,
  ContainerStatus,
  ContainerVideo,
  ImageFooter,
  Logo,
  Video,
} from './style';

const index = () => (
  <div>
    <ContainerLogo>
      <Logo src={ImageLogo} alt="Logo Jello" />
    </ContainerLogo>

    <ContainerStatus>
      <Circle style={{ background: '#44f9bd', color: '#fff', fontSize: 10 }}>
        <BsCheckLg />
      </Circle>
      <Border style={{ background: '#44f9bd' }} />
      <Circle style={{ border: '1px solid #44f9bd' }} />
      <Border />
      <Circle style={{ border: ' 1px solid #e7274e' }} />
    </ContainerStatus>

    <ContainerVideo>
      <Video />
    </ContainerVideo>

    <ContainerButton>
      <Button>Continuar</Button>
    </ContainerButton>

    <ImageFooter src={IconsFooter} alt="Icons Footer" />
  </div>
);

export default index;
