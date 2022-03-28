import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fafafa;
  align-items: center;
  display: flex;
  justify-content: center;

  margin-bottom: -100px;
`;

export const ComingSoonContainer = styled.div`
  margin-top: 80px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1120px;
  justify-content: center;
  align-items: center;

  img {
    width: 700px;
    height: 500px;
    width: 764px;
    height: 581px;
  }

  h2 {
    display: flex;
    justify-content: center;
    margin-top: 54px;
    margin-bottom: 80px;

    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 2.5rem;
    color: #282828;

    text-align: center;
  }

  @media (max-width: 800px) {
    img {
      width: 564px;
      height: 381px;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 364px;
      height: 181px;
    }
  }
`;
