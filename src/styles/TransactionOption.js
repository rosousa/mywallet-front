import styled from "styled-components";

const TransactionOption = styled.div`
  background: #a328d6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 600;
  color: #ffffff;
  width: 155px;
  height: 114px;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;

  & > p {
    width: 50px;
  }

  & > span {
    font-size: 23px;
  }

  &:hover {
    filter: brightness(1.11);
  }
`;

export default TransactionOption;
