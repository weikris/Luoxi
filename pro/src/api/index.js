import axios from 'axios';
let baseUrl = "http://api.cat-shop.penkuoer.com";

export const POST = (url, params) => {
	return axios.post(
		`${baseUrl}${url}`,
		params
	).then(data => data)
}

export const GET = (url,params) =>{
  return axios.get(
    `${baseUrl}${url}`,
		{params:params}
  ).then(data=>data)
}

export const GETid = (url,params) => {
	return axios({
		method:'get',
		url:`${baseUrl}${url}`,
		params:params
	}).then(data=>data)
}