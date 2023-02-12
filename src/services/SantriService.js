import axios from "axios";
import { BASE_URL } from "../config/api";

export const fetchAllDataSantri = () => {
  axios.get(`${BASE_URL}/getAllSantri`).then((res) => {
    return res.data.data;
  });
};
