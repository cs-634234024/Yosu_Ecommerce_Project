import axios from "axios";
import { REGISTER_URL } from "./apiConfig";
import { LOGIN_URL } from "./apiConfig";

export const registerService = ({data}) => {
      axios.post(REGISTER_URL , {data})
}