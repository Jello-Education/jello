import styled from 'styled-components';

import { FontFamily, MediaQuery } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  input {
    border-radius: 40px;
  }
`;

export const TitleConect = styled.p`
  font-family: ${FontFamily.MONTSERRAT};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;

  display: flex;
  align-items: center;

  color: #000000;

  @media ${MediaQuery.MOBILE} {
    margin-top: 12px;
  }
`;
