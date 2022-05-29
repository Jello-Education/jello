import styled from 'styled-components';

export const ContainerForm = styled.div`
  display: grid;
  justify-content: center;
  margin-top: 5%;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 50px;
  color: #fd3373;
  font-weight: bolder;
  text-align: center;
`;

export const ContainerCheckboxs = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1%;
`;

export const ContainerCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5%;
`;

export const NameCheckbox = styled.h2`
  font-size: 14px;
`;

export const ContainerInputs = styled.div`
  display: grid;
  width: 100%;
  margin-top: 5%;
`;

export const NameInput = styled.h2`
  font-size: 20px;
  color: #fd3373;
  margin-top: 5%;
`;

export const Input = styled.input`
  background: none;
  font-size: 16px;
  width: 500px;
  color: #fd3373;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #fd3373;
  padding-bottom: 10px;
  margin-top: 3%;

  &::placeholder {
    color: #bdbdbd;
  }
`;

export const ContainerInput = styled.div`
  position: relative;
`;

export const ContainerIcon = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  padding: 5px;
  position: absolute;
  box-sizing: border-box;
  top: 30%;
  right: 25px;
  transform: translateY(-50%);
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
  margin-top: 5%;
`;

export const Button = styled.button`
  width: 300px;
  height: 60px;
  border-radius: 30px;
  background-color: #44f9bd;
  color: #000000;
  font-size: 16px;
  outline: none;
  border: none;
`;
