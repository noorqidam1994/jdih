import axios from "axios";

import { server } from "../config";

const axiosInstance = axios.create({
  baseURL: server,
  timeout: 5000,
  headers: { "Content-Type": "application/json;charset=UTF-8" },
});

axiosInstance.interceptors.response.use(
  function (response) {
    console.log("Response:", response);
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      console.error("Unauthorized, logging out...");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
