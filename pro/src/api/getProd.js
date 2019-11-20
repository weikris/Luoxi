import * as API from './index';

// 注册
export const getRegister=(params)=>{
  return API.POST('/api/v1/auth/reg',params)
}

// 登录

export const getLogin=(params)=>{
  return API.POST('/api/v1/auth/login',params)
}

// 详情
export const getLogin=(params)=>{
  return API.POST('/api/v1/auth/login',params)
}


