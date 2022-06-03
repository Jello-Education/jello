import styled from 'styled-components';

export const ContainerInfo = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 991px) {
    display: grid;
    padding-top: 30px;
    align-items: flex-start;
    height: 100%;
  }
`;

export const ContainerTop = styled.div`
  padding-left: 50px;
  width: 50%;

  @media only screen and (max-width: 991px) {
    padding-left: 0px;
    padding: 30px;
    width: 100%;
  }

  @media only screen and (min-width: 2100px) {
    padding-left: 330px;
  }
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bolder;
  font-size: 80px;
  letter-spacing: 0.015em;
  margin-bottom: 8px;

  color: #282828;

  text-shadow: 4px 4px 0px rgba(253, 51, 115, 1);

  @media only screen and (max-width: 991px) {
    text-align: center;
    font-size: 50px;
    margin-bottom: 20px;
    text-shadow: 3px 3px 0px rgba(253, 51, 115, 1);
  }

  @media only screen and (max-width: 1500px) {
    font-size: 60px;
    margin-bottom: 15px;
  }
`;

export const Description = styled.p`
  font-size: 22px;
  color: #000;
  margin-top: 3%;
  width: 60%;

  @media only screen and (max-width: 991px) {
    text-align: center;
    width: 100%;
    font-size: 18px;
  }
`;

export const ContainerImageInfo = styled.div`
  width: 50%;
  @media only screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const Button = styled.button`
  width: 350px;
  border-radius: 70px;
  background: #fd3373;
  color: #fff;
  height: 60px;
  margin-top: 3%;
  border: 0;
  font-size: 18px;

  @media only screen and (max-width: 991px) {
    height: 55px;
    width: 300px;
    font-size: 14px;
    margin-top: 5%;
  }
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 95vh;
  object-fit: cover;

  @media only screen and (max-width: 991px) {
    height: 40vh;
  }
`;

export const ContainerPlans = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 30px;
`;

export const TitlePlans = styled.h1`
  text-align: center;
  font-size: 50px;
  margin-top: 3%;

  @media only screen and (max-width: 991px) {
    font-size: 18px;
  }
`;

export const ContainerBox = styled.div`
  margin-right: 3%;
`;

export const Box = styled.div`
  width: 400px;
  height: 600px;
  border-radius: 50px;
  background: #fff;
  padding: 30px;
  margin-top: 5%;
  box-shadow: 0px 0px 122px -23px rgba(0, 0, 0, 0.72);
  -webkit-box-shadow: 0px 0px 122px -23px rgba(0, 0, 0, 0.72);
  -moz-box-shadow: 0px 0px 122px -23px rgba(0, 0, 0, 0.72);

  @media only screen and (max-width: 991px) {
    width: 350px;
    height: 600px;
    box-shadow: 0px 0px 122px -23px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0px 0px 122px -23px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 122px -23px rgba(0, 0, 0, 0.5);
  }
`;

export const BoxPrincipal = styled.div`
  width: 400px;
  height: 700px;
  border-radius: 50px;
  padding: 30px;
  background: #fd3373;
  margin-top: 10%;

  @media only screen and (max-width: 991px) {
    width: 350px;
    height: 600px;
  }
`;

export const ButtonBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 60px;
  background: #44f9bd;
  border: none;
  margin-top: 10%;
  font-size: 18px;
  border-radius: 50px;
  font-weight: 500;

  @media only screen and (max-width: 991px) {
    margin-top: 5%;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 100px;

  @media only screen and (max-width: 991px) {
    display: grid;
    padding: 20px;
    justify-content: center;
    align-items: center;
  }
`;

export const ImageInfo = styled.img`
  width: 80%;
`;

export const TitleInfo = styled.h1`
  text-align: center;
  margin-top: 3%;

  @media only screen and (max-width: 991px) {
    font-size: 20px;
  }
`;

export const DescriptionInfo = styled.p`
  text-align: center;
  margin-top: 1%;
  @media only screen and (max-width: 991px) {
    font-size: 14px;
  }
`;

export const TitleBox = styled.h1`
  font-size: 35px;
  color: #282828;
  text-align: center;
  font-weight: 900;
`;

export const DescriptionBox = styled.h1`
  font-size: 40px;
  color: #44f9bd;
  text-align: center;
  font-weight: 900;
  text-shadow: 0px 2px 0px rgba(0, 0, 0, 1);
`;

export const TitleBoxPrincipal = styled.h1`
  font-size: 35px;
  color: #fff;
  text-align: center;
  font-weight: 900;
`;

export const DescriptionBoxPrincipal = styled.h1`
  font-size: 40px;
  color: #44f9bd;
  text-align: center;
  font-weight: 900;
  text-shadow: 0px 2px 0px rgba(0, 0, 0, 1);
`;

export const ContainerButton = styled.div`
  @media only screen and (max-width: 991px) {
    display: flex;
    justify-content: center;
  }
`;

export const ContainerBoxs = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 5%;

  @media only screen and (max-width: 991px) {
    display: grid;
  }
`;

export const ContainerBoxInfo = styled.div`
  display: grid;
  justify-content: center;
  width: 50%;

  @media only screen and (max-width: 991px) {
    width: 100%;
    margin-top: 3%;
  }
`;
