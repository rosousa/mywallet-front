import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Title from "../../../styles/Title";
import { Form, Input, Button } from "../../../styles/FormStyle";
import { deposit } from "../../../services/myWallet";
import Token from "../../../contexts/Token";

function Deposit() {
  const [depositObj, setDepositObj] = useState({});

  const { credentials } = useContext(Token);

  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();

    const token = `Bearer ${credentials.token}`;

    const body = {
      value: depositObj.value,
      description: depositObj.description,
    };

    if (depositObj.value && depositObj.description) {
      deposit(body, token).then(() => {
        navigate("/wallet");
      });
    }
  }

  return (
    <Wrapper>
      <div>
        <Header>
          <Title>Nova entrada</Title>
        </Header>
        <Form onSubmit={handleForm}>
          <Input
            placeholder="Valor"
            type="number"
            name="value"
            step="1"
            required
            onChange={(e) =>
              setDepositObj({ ...depositObj, value: e.target.value })
            }
          />
          <Input
            placeholder="Descrição"
            type="text"
            name="description"
            required
            onChange={(e) =>
              setDepositObj({ ...depositObj, description: e.target.value })
            }
          />
          <Button>Salvar entrada</Button>
        </Form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #8c11be;
  font-family: "Raleway", sans-serif;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  & > div {
    max-width: 326px;
    max-height: 650px;
  }
`;

const Header = styled.div`
  width: 326px;
  padding: 25px 0;
`;

export default Deposit;
