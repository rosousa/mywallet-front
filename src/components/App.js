import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Login from "./login/Login";
import Register from "./login/Register";
import Wallet from "./wallet/Wallet";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
