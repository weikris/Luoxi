import * as API from './index';

// 注册
export const getRegister=(params)=>{
  return API.POST('/api/v1/auth/reg',params)
}

// 登录

export const getLogin=(params)=>{
  return API.POST('/api/v1/auth/login',params)
}

//商品
export const getProduct=(params)=>{
  return API.GET('/api/v1/products',params)
}

// 详情
export const getDetail=(id)=>{
  return API.GETid('/api/v1/products/'+id)
}