import styled from 'styled-components';

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;

  @media only screen and (max-width: 991px) {
    margin-top: 10%;
  }
`;

export const Logo = styled.img`
  width: 200px;

  @media only screen and (max-width: 991px) {
    width: 100px;
  }
`;

export const ContainerStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;

  @media only screen and (max-width: 991px) {
    margin-top: 5%;
  }
`;

export const Circle = styled.div`
  width: 25px;
  height: 25px;
  background: none;
  border: 1px solid #44f9bd;
  border-radius: 50%;

  @media only screen and (max-width: 991px) {
    width: 20px;
    height: 20px;
  }
`;

export const Circle2 = styled.div`
  width: 25px;
  height: 25px;
  background: none;
  border: 1px solid #e7274e;
  border-radius: 50%;

  @media only screen and (max-width: 991px) {
    width: 20px;
    height: 20px;
  }
`;

export const Border = styled.div`
  width: 250px;
  height: 2px;
  background-color: #e7274e;
  border: none;

  @media only screen and (max-width: 991px) {
    height: 1px;
    width: 100px;
  }
`;

export const ContainerInput = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 1%;

  @media only screen and (max-width: 991px) {
    margin-top: 5%;
  }
`;

export const TitleInput = styled.p`
  font-size: 16px;
  color: #fd3373;
  margin-top: 8%;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 500px;
  height: 50px;
  border: none;
  border-bottom: 1px solid #e7274e;
  background: none;
  outline: none;

  &::placeholder {
    color: #bdbdbd;
  }

  @media only screen and (max-width: 991px) {
    width: 300px;
  }
`;

export const ContainerPrivacity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;

  @media only screen and (max-width: 991px) {
    margin-top: 10%;
  }
`;

export const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  background: none;
  border: 2px solid #fd3373;
  border-radius: 50%;
  margin-right: 3%;
`;

export const Description = styled.p`
  font-size: 14px;

  @media only screen and (max-width: 991px) {
    width: 70%;
    font-size: 12px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  color: #000;
  border-radius: 30px;
  background: #44f9bd;
  border: none;
  font-size: 16px;
`;

export const ImageFooter = styled.img`
  width: 100%;
  bottom: 0;
  transform: translateY(30%);

  @media only screen and (max-width: 991px) {
    height: 130px;
    object-fit: cover;
    transform: translateY(0%);
  }

  @media only screen and (max-width: 375px) {
    height: 100px;
    object-fit: cover;
    transform: translateY(100%);
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #fd3373;
  text-align: center;

  @media only screen and (max-width: 991px) {
    font-size: 30px;
  }
`;
