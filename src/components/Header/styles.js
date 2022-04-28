import styled from 'styled-components';

import { MediaQuery } from '../../styles/variables';

export const Container = styled.header`
  position: fixed;
  left: 0rem;
  z-index: 2;
  top: 0;
  height: 80px;
  width: 100%;
  padding: 0 0.3rem;
  background: #fafafa;
  border: 0.75px solid #e5e5e5;
  border-radius: 0 0 20px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media ${MediaQuery.MOBILE} {
    height: 60px;
  }
`;

export const HeaderContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerImg = styled.a`
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;

  img {
    align-items: center;

    cursor: pointer;
  }

  @media ${MediaQuery.MOBILE} {
    height: 60px;
  }
`;
