import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { Form, Input, Button } from "../../styles/FormStyle";

function Register() {
  let navigate = useNavigate();

  const [credentials, setCredentials] = useState({});

  function handleForm(e) {
    e.preventDefault();
    console.log(credentials);
  }

  return (
    <Wrapper>
      <Logo />
      <Form onSubmit={handleForm}>
        <Input
          placeholder="Nome"
          name="name"
          required
          onChange={(e) =>
            setCredentials({ ...credentials, name: e.target.value })
          }
        />
        <Input
          placeholder="E-mail"
          name="email"
          type="email"
          required
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <Input
          placeholder="Senha"
          name="password"
          type="password"
          required
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <Input
          placeholder="Confirme a senha"
          name="password_confirmation"
          type="password"
          required
          onChange={(e) =>
            setCredentials({
              ...credentials,
              passwordConfirmation: e.target.value,
            })
          }
        />
        <Button>Cadastrar</Button>
      </Form>
      <LoginAccount onClick={() => navigate("/")}>
        Já tem uma conta? Entre agora!
      </LoginAccount>
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

const LoginAccount = styled.button`
  background: none;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export default Register;
