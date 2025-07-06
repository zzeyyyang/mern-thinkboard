import axios from "axios";

const isProduction = import.meta.env.MODE === "production";

const api = axios.create({
  baseURL: isProduction ? "/api" : "http://localhost:3000/api",
});

export default api;
