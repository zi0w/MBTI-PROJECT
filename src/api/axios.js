import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

export const authApi = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});
