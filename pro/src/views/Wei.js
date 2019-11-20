import React,{Component} from 'react';
import wei from '../css/Wei.module.css'

export default class Wei extends Component{
	render(){
		return(
			<div className={wei.wrap}>
				<div className={wei.con}>
					<h2>微信登录</h2>
					<img src={require('../img/weixin.jpg')} className={wei.img}/>
					<div className={wei.last}>
						<p>请用微信扫描二维码登录</p>
						<p>罗西尼商城</p>
					</div>
				</div>
			</div>
		)
	}
}