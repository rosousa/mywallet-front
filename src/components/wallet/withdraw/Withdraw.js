import { useState } from "react";
import styled from "styled-components";
import Title from "../../../styles/Title";
import { Form, Input, Button } from "../../../styles/FormStyle";

function Withdraw() {
  const [withdraw, setWithdraw] = useState({});

  function handleForm(e) {
    e.preventDefault();
    console.log(withdraw);
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
            required
            onChange={(e) =>
              setWithdraw({ ...withdraw, value: e.target.value })
            }
          />
          <Input
            placeholder="Descrição"
            type="text"
            name="description"
            required
            onChange={(e) =>
              setWithdraw({ ...withdraw, description: e.target.value })
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
