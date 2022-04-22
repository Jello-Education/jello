import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import Logo from '../../assets/svgs/novo-logo-jello.svg';
import { Container, HeaderContent, NavBar } from './styles';

const Header = () => (
  <Container>
    <HeaderContent>
      <a href="/">
        <img src={Logo} alt="Logo da Jello" />
      </a>
      <NavBar>
        <div className="wrapper">
          <input type="checkbox" id="btn" hidden />
          <label htmlFor="btn" className="menu-btn">
            <i className="fas fa-bars">
              <FaBars />
            </i>
            <i className="fas fa-times">
              <FaTimes />
            </i>
          </label>
          <nav id="sidebar">
            <div className="title">Menu</div>
            <ul className="list-items">
              <a to="/coming">
                <li>Comece a Aprender</li>
              </a>
              <a to="/coming">
                <li>Conteúdos</li>
              </a>
              <a to="/about">
                <li>Sobre a Jello</li>
              </a>
            </ul>
          </nav>
        </div>
      </NavBar>
    </HeaderContent>
  </Container>
);

export default Header;
