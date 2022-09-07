import styled from "styled-components";

const Form = styled.form`
  width: 326px;
  display: flex;
  flex-direction: column;
  row-gap: 13px;
  padding: 25px 0;
`;

const Input = styled.input`
  width: 100%;
  height: 58px;
  padding: 0 10px;
  font-size: 20px;

  &::placeholder {
  }
`;

const Button = styled.button`
  background-color: #a328d6;
  color: #ffffff;
  width: 100%;
  height: 46px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(1.11);
  }
`;

export { Form, Input, Button };
