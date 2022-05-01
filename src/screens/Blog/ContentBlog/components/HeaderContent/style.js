import styled from 'styled-components';

import {
  Color,
  FontFamily,
  FontWeight,
  MediaQuery,
} from '../../../../../styles/variables';

export const Container = styled.div``;

export const TypeContent = styled.p`
  font-family: ${FontFamily.OSWALD};
  font-style: normal;
  font-weight: ${FontWeight.REGULAR};
  font-size: 24px;

  text-decoration-line: underline;

  color: ${Color.primary._01};

  @media ${MediaQuery.MOBILE} {
    font-size: 18px;
  }

  @media ${MediaQuery.TABLET_DOWN} {
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  font-family: ${FontFamily.MONTSERRAT};
  font-style: normal;
  font-weight: ${FontWeight.BOLD};
  font-size: 48px;
  line-height: 60px;
  max-width: 900px;
  margin-top: 16px;
  margin-bottom: 16px;

  letter-spacing: 0.015em;

  color: ${Color.senary._05};

  @media ${MediaQuery.MOBILE} {
    font-size: 20px;
    line-height: 30px;

    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media ${MediaQuery.TABLET_DOWN} {
    font-size: 32px;
    line-height: 30px;

    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const Description = styled.h3`
  font-family: ${FontFamily.ROBOTO_SLAB};
  font-style: normal;
  font-weight: ${FontWeight.LIGHT};
  font-size: 24px;
  line-height: 32px;
  max-width: 900px;

  letter-spacing: -0.005em;

  color: ${Color.senary._05};

  @media ${MediaQuery.MOBILE} {
    font-size: 16px;
    line-height: 30px;
  }

  @media ${MediaQuery.TABLET_DOWN} {
    font-size: 18px;
  }
`;

export const ContainerAuthor = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  align-items: center;

  margin-top: 20px;
  margin-bottom: 20px;
`;

export const AuthorImg = styled.img`
  @media ${MediaQuery.MOBILE} {
    width: 28px;
    height: 28px;
  }
`;

export const AuthorName = styled.p`
  font-family: ${FontFamily.MONTSERRAT};
  font-style: normal;
  font-weight: ${FontWeight.SEMI_BOLD};
  font-size: 14px;
  margin-left: 8px;

  color: ${Color.senary._05};

  @media ${MediaQuery.MOBILE} {
    font-size: 12px;
  }
`;

export const AuthorDescription = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerNetwork = styled.div``;

export const ClickNetwork = styled.a`
  margin-right: 8px;
  cursor: pointer;

  @media ${MediaQuery.MOBILE} {
    img {
      width: 22px;
      height: 22px;
    }
  }
`;

export const SeparatorLine = styled.div`
  width: 100%;
  border-radius: 10px;
  max-width: 900px;
  border: 1px solid #fd3373;
`;
