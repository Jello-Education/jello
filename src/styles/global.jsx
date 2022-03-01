import { createGlobalStyle } from 'styled-components';

import GridCSS from './grid';
import { FontFamily, FontWeight, MediaQuery } from './variables';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    width: 100%;
    height: 100%;
  }

  body {
    box-sizing: border-box;
    background-color: #FDFDFD;
    font-family: ${FontFamily.POPPINS};
    font-weight: ${FontWeight.REGULAR};
    font-size: 14px;
    color: #1d1d1d;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  html,
  body,
  #app {
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
    background: #FDFDFD;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px #FDFDFD;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px #FDFDFD;
    background-color: #747474;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #13c150;
  }

  section {
    padding: 0px 45px;

    @media ${MediaQuery.TABLET_DOWN} {
      padding: 0px 24px;
    }
  }

  .Toastify__toast {
    background: #353741;
    color: #fff;
    font-size: 1.5rem;
    padding: 15px;
    border-right: 5px solid #fff;
  }

  .Toastify__toast--success {
    border-color: #13c150;
  }

  .Toastify__toast--warning {
    border-color: #ff9300;
  }

  .Toastify__toast--error {
    border-color: #e10d05;
  }

  .skeleton {
    min-height: 200px;
    background-color: #FDFDFD;
  }

  .skeleton::before {
    content: '';
    position: absolute;
    left: -150px;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #353741 50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }

  .carousel form * {
    box-sizing: content-box;
  }

  .carousel .slider-wrapper {
    backdrop-filter: blur(10px);
  }

  .carousel .slide {
    background: transparent;
  }

  .loading {
    position: relative;
    overflow: hidden;
    background-color: hsla(0, 0%, 51%, 0.2);
  }

  .loading::after {
    content: '';
    display: block;
    background-color: rgba(113, 1, 255, 0.1);
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    transform: translateX(0);
    animation: 1.5s loading-placeholder ease-in-out infinite;
  }

  @keyframes loading-placeholder {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  ${'@-ms-viewport'} {
    width: device-width;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  a {
    color: #1890ff;
    text-decoration: none;
    transition: 0.3s all;

    &:hover {
      opacity: 0.8;
    }
  }
 
  ${GridCSS}

  .ReactModal__Body--open {
    overflow: hidden;
  }

  .ReactModal__Overlay {
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6) !important;
  }
`;

export default GlobalStyle;
