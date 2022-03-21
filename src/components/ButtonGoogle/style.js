import styled from 'styled-components';

import { FontFamily } from '../../styles/variables';

export const Container = styled.button`
  padding: 16px;
  border: none;

  background: #fafafa;
  box-shadow: 0px 4px 4px rgba(40, 40, 40, 0.5);
  border-radius: 50px;

  cursor: pointer;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-family: ${FontFamily.MONTSERRAT};
    font-style: normal;
    font-weight: bold;
    font-size: 13.5px;
    line-height: 16px;
    letter-spacing: 0.015em;
    margin-left: 8px;

    color: #000000;
  }
`;
