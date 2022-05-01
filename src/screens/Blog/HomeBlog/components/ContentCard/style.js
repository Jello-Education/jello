import styled from 'styled-components';

import {
  Color,
  FontFamily,
  FontWeight,
  MediaQuery,
} from '../../../../../styles/variables';

export const Container = styled.div`
  background: #f6f6f6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  max-width: 400px;
  padding-bottom: 10px;
  margin: 10px;

  @media ${MediaQuery.MOBILE} {
    max-width: 300px;
    border-radius: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleHeader = styled.p`
  font-family: ${FontFamily.ROBOTO_SLAB};
  font-style: normal;
  font-weight: ${FontWeight.REGULAR};
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.005em;

  color: ${Color.senary._05};

  margin: 15px;
`;

export const PublicationTime = styled.p`
  font-family: ${FontFamily.ROBOTO_SLAB};
  font-style: normal;
  font-weight: ${FontWeight.LIGHT};
  font-size: 12px;
  line-height: 16px;

  letter-spacing: -0.005em;

  color: ${Color.senary._05};

  margin: 15px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.h1`
  font-family: ${FontFamily.MONTSERRAT};
  font-style: normal;
  font-weight: ${FontWeight.SEMI_BOLD};
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.015em;
  margin: 15px;

  color: ${Color.senary._05};

  transform: rotate(0.19deg);

  @media ${MediaQuery.MOBILE} {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  font-family: ${FontFamily.ROBOTO_SLAB};
  font-style: normal;
  font-weight: ${FontWeight.LIGHT};
  font-size: 12px;
  line-height: 20px;
  margin: 15px;
  text-align: justify;

  letter-spacing: 0.015em;

  color: ${Color.senary._05};

  @media ${MediaQuery.MOBILE} {
    display: none;
  }
`;

export const AuthorInformation = styled.div`
  display: flex;
  align-items: center;
  margin: 15px;
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
