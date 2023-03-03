import axios from "axios";
import { API_URL, CAT_RESPONSE } from "../constants";

const axiosInstance = axios.create({ baseURL: API_URL });

export const getRequest = async (method: string) => {
  try {
    const response = await axiosInstance.get<CAT_RESPONSE[]>(method);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
//post,put, patch
