import axios from 'axios';
let baseURL = "http://jx.xuzhixiang.top/ap/api";


export const GET =(url,params)=>{
  return axios.get(`${baseURL}${url}`,{
    params:params
  }).then((data)=>{
    return data
  })
}