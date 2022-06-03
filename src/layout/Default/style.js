import styled from 'styled-components';

import { MediaQuery } from '../../styles/variables';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  height: 100%;

  @media ${MediaQuery.TABLET_DOWN} {
    padding-top: 37px;
  }
`;
