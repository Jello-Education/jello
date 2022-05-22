import styled from 'styled-components';

import { FontFamily, MediaQuery } from '../../styles/variables';

export const Container = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  background: #fd3373;
  height: 100vh;
`;

export const SectionInputs = styled.div`
  width: 50%;
  text-align: center;
  justify-content: center;
  align-items: center;
  background: #fff;
  margin-top: 20px;
  border-radius: 10px;
  padding: 20px;

  @media ${MediaQuery.MOBILE} {
    width: 95%;
    padding: 10px;
  }
`;

export const Title = styled.div`
  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 73px;
    letter-spacing: 0.015em;
    margin-bottom: 8px;

    color: #282828;

    text-shadow: 2.2px 2.2px 0px #fd3373;

    @media ${MediaQuery.MOBILE} {
      font-size: 24px;
      margin-bottom: 0px;
    }
  }

  h2 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;

    letter-spacing: -0.005em;

    color: #000000;

    @media ${MediaQuery.MOBILE} {
      font-size: 18px;
    }
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  p {
    font-family: ${FontFamily.MONTSERRAT};
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 17px;

    letter-spacing: 0.015em;
    text-transform: uppercase;

    color: #fd3373;

    margin-left: 7px;
    margin-right: 7px;
  }

  div {
    width: 100%;
    background: #fd3373;
    border: 1px solid #fd3373;
  }
`;

export const ContainerInput = styled.div`
  padding: 0 30px;

  div:last-child {
    justify-content: left;
  }

  @media ${MediaQuery.MOBILE} {
    padding: 0px;
  }
`;

export const SectionButton = styled.div`
  cursor: pointer;
`;

export const ForgotPassword = styled.a`
  cursor: pointer;
  p {
    margin-top: 40px;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;

    letter-spacing: 0.015em;
    text-decoration-line: underline;

    color: #fd3373;

    @media ${MediaQuery.MOBILE} {
      margin-top: 20px;
    }
  }
`;
