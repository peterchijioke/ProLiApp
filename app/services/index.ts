import axios from "axios"
import secrets from "../../secrets"
import { APIResponse } from "../types/api-response"

export const getApiService = async(path:string):Promise<APIResponse>=>{
  try {
    const response = await axios.get(secrets().base_url+path)
    return {error:false,data:response.data}
  } catch (error:any) {
   return {
      error:true,message:error?.message
    }
    
  }
}