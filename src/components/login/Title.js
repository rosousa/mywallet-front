import styled from "styled-components";

function Title() {
  return <MyWalletTitle>My Wallet</MyWalletTitle>;
}

const MyWalletTitle = styled.p`
  font-family: "Saira Stencil One", cursive;
  color: #ffffff;
  font-size: 32px;
`;

export default Title;
