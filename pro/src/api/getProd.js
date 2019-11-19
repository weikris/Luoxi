import * as API from './index';

export const getProlist=(params)=>{
  return API.GET('/productlist.php',params)
}