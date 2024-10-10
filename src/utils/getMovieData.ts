import { instance } from "./apiInstance"


export const MovieData = async (count: number)=>{
    const response = await instance.get(`?apikey=${import.meta.env.VITE_API_KEY}&s=movie&type=movie&page=${count}`);
    const data = response.data
    return data
}