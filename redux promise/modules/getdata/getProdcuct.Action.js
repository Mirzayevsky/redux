import axios from "axios";
import { BaseUrl } from "../../../Constants/api";

export const getDataAction=(url)=>({
    type:"GET_PRODUCT",
    payload:axios.get(`${BaseUrl}${url}`),
});