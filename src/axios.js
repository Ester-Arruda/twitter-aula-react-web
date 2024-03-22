import Axios from "axios";
import { AuthService } from "./auth.service";

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axios.interceptors.request.use((config) => {
  const token = AuthService.getToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
