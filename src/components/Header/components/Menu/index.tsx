import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

import {
  ButtonLogin,
  ButtonRegister,
  Container,
  ContainerButtons,
  LinkButon,
  Links,
} from './styles';

const Menu = () => (
  <Container>
    <div className="wrapper">
      <input type="checkbox" id="btn" hidden />
      <label htmlFor="btn" className="menu-btn">
        <i className="fas fa-bars">
          <MenuIcon />
        </i>
        <i className="fas fa-times">
          <CloseIcon />
        </i>
      </label>
      <nav id="sidebar">
        <div className="title">Menu</div>

        <Links>
          <LinkButon to="/coming">Comece a aprender</LinkButon>
          <LinkButon to="/coming">Conteúdos</LinkButon>
          <LinkButon to="/coming">Sobre a Jello</LinkButon>
        </Links>

        <ContainerButtons>
          <ButtonLogin to="/signin">Iniciar sessão</ButtonLogin>
          <ButtonRegister to="/signup">Registrar</ButtonRegister>
        </ContainerButtons>
      </nav>
    </div>
  </Container>
);

export default Menu;
