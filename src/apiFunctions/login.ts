import { axiosBase } from "../config/axiosConfig";

export async function getRequestToken(){
    const response = await axiosBase.get('/auth/request-token')
    console.log(response.data)
    return response
}