import { request } from "playwright"

const apiGetMethod = async(url:string,data?:any) =>{
    const requestApi = await request.newContext()
    return requestApi.get(url,data)
}

export{apiGetMethod}