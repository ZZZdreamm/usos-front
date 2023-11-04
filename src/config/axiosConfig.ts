import axios from "axios";

// const apiBaseUrl = "https://www.arcziweb.com/api/"
const apiBaseUrl = "http://localhost:8091/api/"


export const axiosBase = axios.create({
    baseURL: apiBaseUrl
})