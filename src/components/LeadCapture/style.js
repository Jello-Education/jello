import styled from 'styled-components';

import {
  Color,
  FontFamily,
  FontWeight,
  MediaQuery,
} from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  background: ${Color.primary._02};
  box-shadow: 0px 10px 0px #c73865;
  border-radius: 20px;
  margin-bottom: 100px;
  margin-top: 60px;
  max-width: 1250px;
`;

export const Image = styled.img`
  margin-right: 30px;

  @media ${MediaQuery.MOBILE} {
    display: none;
  }
`;

export const Title = styled.h1`
  font-family: ${FontFamily.MONTSERRAT};
  font-style: normal;
  font-weight: ${FontWeight.SEMI_BOLD};
  font-size: 38px;
  line-height: 59px;
  margin-bottom: 15px;

  letter-spacing: -0.005em;

  color: ${Color.senary._02};

  @media ${MediaQuery.MOBILE} {
    font-size: 28px;
    text-align: center;
    line-height: 40px;
  }
`;

export const Caption = styled.h3`
  font-family: ${FontFamily.MONTSERRAT};
  font-style: normal;
  font-weight: ${FontWeight.SEMI_BOLD};
  font-size: 20px;
  line-height: 30px;

  letter-spacing: -0.005em;

  color: ${Color.senary._02};

  @media ${MediaQuery.TABLET_UP} {
    max-width: 370px;
  }

  @media ${MediaQuery.MOBILE} {
    font-size: 16px;
    text-align: center;
    line-height: 20px;
  }
`;

export const Content = styled.div`
  width: 100%;
`;

export const ContentInput = styled.div`
  width: 100%;
`;

export const Newsletter = styled.div`
  width: 100%;

  @media ${MediaQuery.TABLET_UP} {
    display: flex;
    justify-content: space-between;
  }
`;

export const BlueHighlight = styled.span`
  color: #025fcd;
`;

export const PinkHighlight = styled.span`
  color: #fd3373;
`;
