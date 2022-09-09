import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  IoExitOutline,
  IoAddCircleOutline,
  IoRemoveCircleOutline,
} from "react-icons/io5";
import Title from "../../styles/Title";
import TransactionOption from "../../styles/TransactionOption";

function Wallet() {
  let navigate = useNavigate();

  return (
    <Wrapper>
      <Header>
        <Title>Olá, fulano</Title>
        <span onClick={() => navigate("/")}>
          <IoExitOutline color="#ffffff" />
        </span>
      </Header>
      <Content>
        {/* <Transaction>
          <div>
            <Date>30/11</Date>
            <Description>Almoço mãe</Description>
          </div>
          <Value>39,90</Value>
        </Transaction> */}
        <NoRegistry>
          <p>Não há registros de entrada ou saída</p>
        </NoRegistry>
      </Content>
      <TransactionButtons>
        <TransactionOption>
          <span>
            <IoAddCircleOutline color={"#ffffff"} />
          </span>
          <p>Nova entrada</p>
        </TransactionOption>
        <TransactionOption>
          <span>
            <IoRemoveCircleOutline color={"#ffffff"} />
          </span>
          <p>Nova saída</p>
        </TransactionOption>
      </TransactionButtons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #8c11be;
  font-family: "Raleway", sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 326px;
  padding: 15px 0;

  & > span {
    cursor: pointer;
    font-size: 25px;
  }
`;

const Content = styled.div`
  background-color: #ffffff;
  width: 326px;
  height: 446px;
  padding: 15px;
  border-radius: 5px;
`;

// const Transaction = styled.div`
//   display: flex;
//   justify-content: space-between;

//   & > div {
//     display: flex;
//     column-gap: 10px;
//   }
// `;

// const Date = styled.p`
//   color: #c6c6c6;
//   font-size: 16px;
//   font-weight: 600;
// `;

// const Description = styled.p`
//   color: #000000;
//   font-size: 16px;
//   font-weight: 600;
// `;

// const Value = styled.p`
//   color: green;
//   font-size: 16px;
//   font-weight: 600;
// `;

const TransactionButtons = styled.div`
  display: flex;
  column-gap: 15px;
  margin-top: 12px;
`;

const NoRegistry = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & > p {
    font-size: 20px;
    color: #868686;
    width: 180px;
  }
`;

export default Wallet;
