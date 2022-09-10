import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { Form, Input, Button } from "../../styles/FormStyle";
import Token from "../../contexts/Token";
import { login } from "../../services/myWallet";

function Login() {
  const [userCredentials, setUserCredentials] = useState({});

  const { setCredentials } = useContext(Token);

  let navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();
    login(userCredentials)
      .then((res) => {
        setCredentials({ token: res.data.token, username: res.data.username });
        navigate("/wallet");
      })
      .catch(() => {
        alert("Usuário e/ou senha inválidos");
      });
  }

  return (
    <Wrapper>
      <Logo />
      <Form onSubmit={handleForm}>
        <Input
          placeholder="E-mail"
          name="email"
          type="email"
          required
          onChange={(e) =>
            setUserCredentials({ ...userCredentials, email: e.target.value })
          }
        />
        <Input
          placeholder="Senha"
          name="password"
          type="password"
          required
          onChange={(e) =>
            setUserCredentials({ ...userCredentials, password: e.target.value })
          }
        />
        <Button>Entrar</Button>
      </Form>
      <CreateAccount onClick={() => navigate("/sign-up")}>
        Primeira vez? Cadastre-se!
      </CreateAccount>
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

const CreateAccount = styled.button`
  background: none;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export default Login;
