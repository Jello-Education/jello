import styled from 'styled-components';

import { MediaQuery } from '../../../styles/variables';

export const Container = styled.div`
  margin-top: 64px;
  margin-left: 30px;
  margin-right: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;

  @media ${MediaQuery.MOBILE} {
    margin-left: 20px;
    margin-right: 20px;
  }
`;
