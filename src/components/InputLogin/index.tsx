import React from 'react';

import ShowPassword from '../../assets/icons/showPassword.svg';
import { ButtonPassword, Container, Img, Input } from './style';

interface Props {
  placeholder: string;
  img?: string;
  password?: boolean;
  top?: number;
}

const InputLogin = ({ placeholder, img, password, top }: Props) => (
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
