import styled from 'styled-components';

import {
  Color,
  FontFamily,
  FontWeight,
  MediaQuery,
} from '../../../../../styles/variables';

export const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 100px;
`;

export const ImageContent = styled.img`
  max-width: 900px;
  border-radius: 5px;

  @media ${MediaQuery.MOBILE} {
    width: 100%;
  }

  @media ${MediaQuery.TABLET_DOWN} {
    width: 100%;
    height: 250px;
  }
`;

export const TextContent = styled.p`
  font-family: ${FontFamily.ROBOTO_SLAB};
  font-style: normal;
  font-weight: ${FontWeight.REGULAR};
  font-size: 14px;
  line-height: 28px;
  margin-top: 40px;
  max-width: 900px;
  text-align: justify;

  letter-spacing: 0.015em;

  color: ${Color.senary._05};

  @media ${MediaQuery.MOBILE} {
    font-size: 12px;
    line-height: 24px;
  }
`;
