import axios from "axios";

export const api = axios.create({
  baseURL: "https://crud-job-space-ps.herokuapp.com",
});
