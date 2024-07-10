import axios from "axios";

export const apiCilent = axios.create({
  baseURL: `http://${import.meta.env.VITE_BASEURL}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
