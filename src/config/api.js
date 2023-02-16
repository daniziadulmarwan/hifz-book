import axios from "axios";

export const BASE_URL = "https://embarrassed-bull-fatigues.cyclic.app";

const token = localStorage.getItem("token");
export const axiosJwt = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
