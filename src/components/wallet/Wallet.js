import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  IoExitOutline,
  IoAddCircleOutline,
  IoRemoveCircleOutline,
} from "react-icons/io5";
import Token from "../../contexts/Token";
import Title from "../../styles/Title";
import TransactionOption from "../../styles/TransactionOption";
import { getTransactions, getBalance } from "../../services/myWallet";
import { logout } from "../../services/myWallet";

function Wallet() {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState();

  let navigate = useNavigate();

  const { credentials } = useContext(Token);

  function logoutUser() {
    const authToken = `Bearer ${credentials.token}`;
    logout(authToken).then(() => {
      navigate("/");
    });
  }

  useEffect(() => {
    const authToken = `Bearer ${credentials.token}`;
    getTransactions(authToken).then((res) => {
      setTransactions([...res.data]);
    });
    getBalance(authToken).then((res) => {
      setBalance(res.data.balance);
    });
  }, [credentials.token]);

  return (
    <Wrapper>
      <div>
        <Header>
          <Title>{`Olá, ${credentials.username}`}</Title>
          <span onClick={logoutUser}>
            <IoExitOutline color="#ffffff" />
          </span>
        </Header>
        <Content>
          <TransactionsDiv>
            {transactions.length === 0 ? (
              <NoRegistry>
                <p>Não há registros de entrada ou saída</p>
              </NoRegistry>
            ) : (
              transactions.map((transaction, index) => {
                return (
                  <Transaction key={index}>
                    <div>
                      <Date>{transaction.date}</Date>
                      <Description>{transaction.description}</Description>
                    </div>
                    <Value type={transaction.type}>
                      {(transaction.value / 100).toFixed(2).replace(".", ",")}
                    </Value>
                  </Transaction>
                );
              })
            )}
          </TransactionsDiv>
          {balance ? (
            <Balance total={balance}>
              <p>SALDO</p>
              <span>{balance.replace("-", "").replace(".", ",")}</span>
            </Balance>
          ) : (
            ""
          )}
        </Content>
        <TransactionButtons>
          <TransactionOption onClick={() => navigate("/wallet/deposit")}>
            <span>
              <IoAddCircleOutline color={"#ffffff"} />
            </span>
            <p>Nova entrada</p>
          </TransactionOption>
          <TransactionOption onClick={() => navigate("/wallet/withdraw")}>
            <span>
              <IoRemoveCircleOutline color={"#ffffff"} />
            </span>
            <p>Nova saída</p>
          </TransactionOption>
        </TransactionButtons>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #8c11be;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Raleway", sans-serif;
  width: 100vw;
  height: 100vh;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: 650px;
  }
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 326px;
  height: 446px;
  padding: 15px;
  border-radius: 5px;
`;

const TransactionsDiv = styled.div`
  height: 93%;
  overflow-y: scroll;
`;

const Transaction = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    column-gap: 10px;
  }
`;

const Date = styled.p`
  color: #c6c6c6;
  font-size: 16px;
  font-weight: 600;
`;

const Description = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: 600;
`;

const Value = styled.p`
  color: ${(props) => (props.type === "deposit" ? "green" : "red")};
  font-size: 16px;
  font-weight: 600;
`;

const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  color: black;
  font-size: 16px;
  font-weight: 700;

  & > span {
    color: ${(props) => (props.total < 0 ? "red" : "green")};
  }
`;

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
