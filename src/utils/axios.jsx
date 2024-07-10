import axios from "axios";

export const apiCilent = axios.create({
  baseURL: "444",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});
