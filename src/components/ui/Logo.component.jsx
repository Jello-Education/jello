import React from 'react';
import { izziStorage } from '../../resources/config';

const Logo = ({ className }) => {
  const logo = `${izziStorage}/izzi/logo.png`;

  return <img src={logo} alt="logo" className={className} />;
};

export default Logo;
