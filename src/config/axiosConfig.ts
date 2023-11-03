import axios from "axios";

const apiBaseUrl = "https://www.arcziweb.com/api/"

export const axiosBase = axios.create({
    baseURL: apiBaseUrl
})