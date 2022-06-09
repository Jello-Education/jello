import React from 'react';

import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

import { Container } from './styles';

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
        <ul className="list-items">
          <a href="/coming">
            <li>Comece a Aprender</li>
          </a>
          <a href="/coming">
            <li>Conteúdos</li>
          </a>
          <a href="/about">
            <li>Sobre a Jello</li>
          </a>
        </ul>
      </nav>
    </div>
  </Container>
);

export default Menu;
