import React from 'react';

import GoogleIcon from '../../assets/icons/google.svg';
import { Container } from './style';

const ButtonGoogle = ({ buttonTop, buttonBottom }) => (
  <Container style={{ marginTop: buttonTop, marginBottom: buttonBottom }}>
    <div>
      <img src={GoogleIcon} alt="google" />
      <p>Entrar com Google</p>
    </div>
  </Container>
);

export default ButtonGoogle;
