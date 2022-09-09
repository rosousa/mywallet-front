import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Login from "./login/Login";
import Register from "./login/Register";
import Wallet from "./wallet/Wallet";
import Deposit from "./wallet/deposit/Deposit";
import Withdraw from "./wallet/withdraw/Withdraw";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/wallet/deposit" element={<Deposit />} />
          <Route path="/wallet/withdraw" element={<Withdraw />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
