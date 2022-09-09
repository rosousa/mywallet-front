import { useState } from "react";
import styled from "styled-components";
import Title from "../../../styles/Title";
import { Form, Input, Button } from "../../../styles/FormStyle";

function Deposit() {
  const [deposit, setDeposit] = useState({});

  function handleForm(e) {
    e.preventDefault();
    console.log(deposit);
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
            required
            onChange={(e) => setDeposit({ ...deposit, value: e.target.value })}
          />
          <Input
            placeholder="Descrição"
            type="text"
            name="description"
            required
            onChange={(e) =>
              setDeposit({ ...deposit, description: e.target.value })
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
