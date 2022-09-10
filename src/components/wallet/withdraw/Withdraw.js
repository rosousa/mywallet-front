import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Title from "../../../styles/Title";
import { Form, Input, Button } from "../../../styles/FormStyle";
import Token from "../../../contexts/Token";
import { withdraw } from "../../../services/myWallet";

function Withdraw() {
  const [withdrawObj, setWithdrawObj] = useState({});

  const { credentials } = useContext(Token);

  const navigate = useNavigate();

  function handleForm(e) {
    e.preventDefault();

    const token = `Bearer ${credentials.token}`;

    const body = {
      value: withdrawObj.value,
      description: withdrawObj.description,
    };

    if (withdrawObj.value && withdrawObj.description) {
      withdraw(body, token).then(() => {
        navigate("/wallet");
      });
    }
  }

  return (
    <Wrapper>
      <div>
        <Header>
          <Title>Nova saída</Title>
        </Header>
        <Form onSubmit={handleForm}>
          <Input
            placeholder="Valor"
            type="number"
            name="value"
            step="0.01"
            required
            onChange={(e) =>
              setWithdrawObj({ ...withdrawObj, value: e.target.value })
            }
          />
          <Input
            placeholder="Descrição"
            type="text"
            name="description"
            required
            onChange={(e) =>
              setWithdrawObj({ ...withdrawObj, description: e.target.value })
            }
          />
          <Button>Salvar saída</Button>
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
  align-items: center;
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

export default Withdraw;
