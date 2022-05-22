import React from 'react';

import ShowPassword from '../../assets/icons/showPassword.svg';
import { ButtonPassword, Container, Img, Input } from './style';

const InputLogin = ({ placeholder, img, password, top }) => (
  <Container top={top}>
    <Img src={img} />
    <Input placeholder={placeholder} type="text" />
    {password && (
      <ButtonPassword>
        <Img src={ShowPassword} />
      </ButtonPassword>
    )}
  </Container>
);

export default InputLogin;
