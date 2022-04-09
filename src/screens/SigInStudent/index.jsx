import React from 'react';

import EmailIcon from '../../assets/icons/email.svg';
import PadlockIcon from '../../assets/icons/padlock.svg';
import ButtonGoogle from '../../components/ButtonGoogle';
import ButtonMain from '../../components/ButtonMain';
import InputLogin from '../../components/InputLogin';
import Conect from './components/Conect';
import {
  Container,
  ContainerInput,
  Divider,
  ForgotPassword,
  SectionButton,
  SectionInputs,
  Title,
} from './style';

const SignIn = () => (
  <Container>
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

      <ContainerInput>
        <InputLogin placeholder="E-mail" img={EmailIcon} />
        <InputLogin placeholder="Senha" img={PadlockIcon} password top={16} />
        <Conect />
      </ContainerInput>
      <SectionButton>
        <ButtonMain title="Cadastrar" background="#FD3373" top={30} />
        <ButtonMain title="Entrar" background="#44F9BD" colorFont="#282828" />
      </SectionButton>

      <ForgotPassword>
        <p>Esqueci minha senha</p>
      </ForgotPassword>
    </SectionInputs>
  </Container>
);

export default SignIn;
