import React, { useState } from 'react';

import EmailIcon from '../../assets/icons/email.svg';
import PadlockIcon from '../../assets/icons/padlock.svg';
import ButtonGoogle from '../../components/ButtonGoogle';
import ButtonMain from '../../components/ButtonMain';
import InputLogin from '../../components/InputLogin';
import {
  Container,
  Divider,
  SectionButton,
  SectionImg,
  SectionInputs,
  Title,
} from './style';

const SignIn = () => {
  const [loading, setLoading] = useState();

  return (
    <Container>
      <SectionImg />
      <SectionInputs>
        <Title>
          <h1>Olá!</h1>
          <h2>Seja bem-vindo(a) novamente!</h2>
        </Title>
        <ButtonGoogle />

        <Divider>
          <div />
          <p>ou</p>
          <div />
        </Divider>

        <div style={{ padding: '0 40px' }}>
          <InputLogin placeholder="E-mail" img={EmailIcon} />
          <InputLogin placeholder="Senha" img={PadlockIcon} password />
        </div>
        <SectionButton>
          <ButtonMain title="Cadastrar" background="#FD3373" />
          <ButtonMain title="Entrar" background="#44F9BD" colorFont="#282828" />
        </SectionButton>
      </SectionInputs>
    </Container>
  );
};

export default SignIn;
