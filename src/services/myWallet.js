import axios from "axios";

const BASE_URL = "localhost:4000";

function login(body) {
  const promisse = axios.post(`${BASE_URL}/sign-in`);
  return promisse;
}

function register(body) {
  const promisse = axios.post(`${BASE_URL}/sign-up`);
  return promisse;
}

export { login, register };
