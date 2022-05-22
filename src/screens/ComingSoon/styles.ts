import styled from 'styled-components';

import { MediaQuery } from '../../styles/variables';

export const Container = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;

  margin-bottom: -100px;
`;

export const ComingSoonContainer = styled.div`
  margin-top: 80px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;

  img {
    width: 764px;
    height: 581px;
  }

  @media ${MediaQuery.MOBILE} {
    img {
      width: 304px;
      height: 161px;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Title = styled.h2`
  justify-content: center;
  margin-top: 54px;

  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #282828;

  text-align: center;

  @media ${MediaQuery.MOBILE} {
    font-size: 16px;
    margin-top: 24px;
  }
`;
