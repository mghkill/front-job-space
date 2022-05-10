import axios from "axios";

export const api = axios.create({
  baseURL: "https://crud-job-space-ps.herokuapp.com/",
});

export const apiCep = axios.create({
  baseURL: "https://viacep.com.br/ws/",
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});
