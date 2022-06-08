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
  display: flex;
  justify-content: center;
  align-items: center;

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

export const ImageFooter = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);

  @media only screen and (max-width: 991px) {
    height: 130px;
    object-fit: cover;
    transform: translateY(100%);
  }

  @media only screen and (max-width: 375px) {
    height: 100px;
    object-fit: cover;
    transform: translateY(250%);
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

export const ContainerVideo = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 1%;

@media only screen and (max-width: 1090px) {
    margin-top: 3%;
}

`;

export const Video = styled.div`
width: 1000px;
height: 600px;
background: #e7274e;

@media only screen and (max-width: 1090px) {
    width: 900px;
}

@media only screen and (max-width: 991px) {
    width: 350px;
}

`;

export const ContainerButton = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 1%;

@media only screen and (max-width: 1090px) {
    margin-top: 2%;
}

@media only screen and (max-width: 991px) {
    margin-top: 3%;
}

`;

export const Button = styled.button`
width: 300px;
height: 60px;
background: #44f9bd;
border-radius: 30px;
font-size: 18px;
border: none;
`;