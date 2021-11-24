import axios from "axios";
import { enviroment } from "../enviroment/enviroment";

export const getNumber_GET = async (num:number) => {
    return axios.get(`${ enviroment.apiBaseUrl }/${num}`)
}