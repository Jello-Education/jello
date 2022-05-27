import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

export const Division = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  text-align: center;

  @media only screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const Student = styled.img`
  width: 50%;
  height: 100vh;
  object-fit: cover;

  @media only screen and (max-width: 1700px) {
    object-fit: fill;
  }

  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 88px;
  line-height: 73px;
  letter-spacing: 0.015em;
  margin-bottom: 8px;

  color: #282828;

  text-shadow: 4px 4px 0px rgba(253, 51, 115, 1);
`;

export const Description = styled.p`
  font-size: 26px;
  color: #282828;
  margin-top: 3%;

  @media only screen and (max-width: 991px) {
    font-size: 20px;
  }
`;

export const ContentBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
`;

export const Border = styled.div`
  width: 250px;
  height: 2px;
  background-color: #fd3373;

  @media only screen and (max-width: 991px) {
    width: 150px;
  }
`;

export const NameBorder = styled.h1`
  font-size: 14px;
  color: #fd3373;
  padding: 20px;
`;

export const ButtonGoogle = styled.button`
  width: 350px;
  height: 60px;
  background-color: #fff;
  border-radius: 50px;
  outline: none;
  border: none;
  font-weight: bolder;
  -webkit-box-shadow: 0px 14px 35px -7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 14px 35px -7px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 14px 35px -7px rgba(0, 0, 0, 0.3);
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageGoogle = styled.img`
  margin-right: 5%;
`;

export const ContentButtonGoogle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;

export const Form = styled.form`
  display: grid;
  justify-content: center;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3%;
  width: 500px;

  @media only screen and (max-width: 991px) {
    width: 350px;
  }
`;

export const NameCheckbox = styled.p`
  margin-left: 2%;
  font-size: 14px;
`;

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
`;

export const ContainerInput = styled.div`
  position: relative;
`;

export const ContainerIconInput = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  padding: 5px;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 10px;
  transform: translateY(-25%);
  font-size: 16px;
  color: #fd3373;

  @media only screen and (max-width: 991px) {
    top: 46%;
    transform: translateY(-30%);
  }
`;

export const ContainerIconPassword = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  padding: 5px;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  right: 25px;
  transform: translateY(-35%);
  font-size: 24px;
  color: #fd3373;

  @media only screen and (max-width: 991px) {
    top: 40%;
    transform: translateY(-30%);
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
`;

export const ButtonRegister = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 50px;
  background-color: #fd3373;
  border: none;
  color: #fff;
  margin-right: 3%;

  @media only screen and (max-width: 991px) {
    width: 150px;
  }
`;

export const ButtonLogin = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 50px;
  background-color: #44f9bd;
  border: none;
  color: #000;

  @media only screen and (max-width: 991px) {
    width: 150px;
  }
`;

export const Input = styled.input`
  width: 500px;
  height: 55px;
  border-radius: 50px;
  background: none;
  border: 1px solid rgb(104, 104, 104);
  padding-left: 2.5rem;
  margin-top: 3%;
  box-sizing: border-box;

  @media only screen and (max-width: 991px) {
    width: 350px;
    padding-left: 4rem;
  }
`;

export const ForgotPassword = styled.p`
  color: #fd3373;
  margin-top: 5%;

  @media only screen and (max-width: 991px) {
    font-size: 14px;
  }
`;
