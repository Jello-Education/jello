import styled from 'styled-components';

import { FontFamily } from '../../styles/variables';

export const Container = styled.button`
  width: 168.75px;
  height: 32.81px;
  border-radius: 40px;
  font-family: ${FontFamily.MONTSERRAT};
  font-weight: bold;
  line-height: 140.62%;
  font-size: 13.5px;
  border: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  margin-top: ${({ top }) => top || 0}px;
  margin-bottom: ${({ bottom }) => bottom || 0}px;

  box-shadow: 0px 2.25px 5.625px rgba(40, 40, 40, 0.5);
  background: ${({ background }) => background || '#FD3373'};
  color: ${({ colorFont }) => colorFont || '#FFFFFF'};
`;
