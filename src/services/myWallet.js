import axios from "axios";

const BASE_URL = "http://localhost:4000";

function login(body) {
  const promisse = axios.post(`${BASE_URL}/sign-in`, body);
  return promisse;
}

function register(body) {
  const promisse = axios.post(`${BASE_URL}/sign-up`, body);
  return promisse;
}

function getTransactions(token) {
  const config = {
    headers: {
      token,
    },
  };
  const promisse = axios.get(`${BASE_URL}/wallet/transactions`, config);
  return promisse;
}

function getBalance(token) {
  const config = {
    headers: {
      token,
    },
  };
  const promisse = axios.get(`${BASE_URL}/wallet/balance`, config);
  return promisse;
}

function deposit(body, token) {
  const config = {
    headers: {
      token,
    },
  };
  const promisse = axios.post(`${BASE_URL}/wallet/deposit`, body, config);
  return promisse;
}

function withdraw(body, token) {
  const config = {
    headers: {
      token,
    },
  };
  const promisse = axios.post(`${BASE_URL}/wallet/withdraw`, body, config);
  return promisse;
}

function logout(token) {
  const config = {
    headers: {
      token,
    },
  };
  const promisse = axios.delete(`${BASE_URL}/wallet/logout`, config);
  return promisse;
}

export {
  login,
  register,
  getTransactions,
  getBalance,
  deposit,
  withdraw,
  logout,
};
