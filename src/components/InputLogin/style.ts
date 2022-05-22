import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid #aaaaaa;
  box-sizing: border-box;

  top: 240px;
  left: -13px;
  height: 50px;
  border-radius: 25px;
  padding: 5 16px;
  background: #fff;
  border: 1px solid #a8a8b3;

  margin: 8px;
  padding-left: 30px;
  padding-right: 30px;

  margin-top: ${({ top }) => top || 0}px;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 50px;
  box-shadow: 0 0 0 0;
  outline: 0;
  padding-left: 8px;

  ::placeholder {
    color: #aaaaaa;
  }
`;

export const Img = styled.img`
  width: 20px;
  height: 20px;
`;

export const ButtonPassword = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
