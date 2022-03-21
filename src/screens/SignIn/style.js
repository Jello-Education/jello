import styled from 'styled-components';

import loginStudent from '../../assets/svgs/authentication/loginStudent.svg';
import { FontFamily } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const SectionImg = styled.div`
  width: 100%;
  height: 100%;
  border: 0px;

  background-image: url(loginStudent);

  /* background-image: url('../../assets/svgs/authentication/loginStudent.svg')
    no-repeat center center; */
`;

export const SectionInputs = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: 48px;
    line-height: 73px;
    letter-spacing: 0.015em;

    color: #282828;

    text-shadow: 4px 4px 0px #fd3373;
  }

  h2 {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 32px;

    letter-spacing: -0.005em;

    color: #000000;
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;

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

export const SectionButton = styled.div``;
