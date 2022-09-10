import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Login from "./login/Login";
import Register from "./login/Register";
import Wallet from "./wallet/Wallet";
import Deposit from "./wallet/deposit/Deposit";
import Withdraw from "./wallet/withdraw/Withdraw";
import Token from "../contexts/Token";

function App() {
  const [credentials, setCredentials] = useState({});

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Token.Provider value={{ credentials, setCredentials }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/wallet/deposit" element={<Deposit />} />
            <Route path="/wallet/withdraw" element={<Withdraw />} />
          </Routes>
        </Token.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
