import axios from "axios"


export const AjaxCall =({method,url,data,headers})=>{
    const baseUrl="http://192.168.88.252:8000/api/admin"
    return axios.request({
        method:method,
        url:baseUrl+url,
        data:data,
        headers:headers
    })
}
