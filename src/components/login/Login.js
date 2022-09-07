import styled from "styled-components";
import Title from "./Title";
import { Form, Input, Button } from "../../styles/FormStyle";
import { useState } from "react";

function Login() {
  const [credentials, setCredentials] = useState({});

  function handleForm(e) {
    e.preventDefault();
    console.log(credentials);
    return;
  }

  return (
    <Wrapper>
      <Title />
      <Form onSubmit={handleForm}>
        <Input
          placeholder="E-mail"
          name="email"
          type="email"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <Input
          placeholder="Senha"
          name="password"
          type="password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <Button>Entrar</Button>
      </Form>
      <Register>Primeira vez? Cadastre-se!</Register>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #8c11be;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Register = styled.button`
  background: none;
  color: #ffffff;
  border: none;
`;

export default Login;
