import React,{Component} from 'react';
import {BrowserRouter as Router,Route,NavLink,Prompt} from 'react-router-dom';
import login from '../css/Login.module.css'
import { Input, Tooltip, Icon, Button,Breadcrumb,message } from 'antd';
import * as api from '../api/getProd';

export default class Login extends Component{
    constructor(props){
        super(props)
		this.state={
			user:'',
			pass:''
		}
    }
	
	// 用户名
	user=(event)=>{
		    if(event && event.target && event.target.value){
		         let value = event.target.value;
				 // console.log(value)
		         this.setState(()=>({user:value }))
		       }
	}
	// 密码
	pass=(event)=>{
		    if(event && event.target && event.target.value){
		         let value = event.target.value;
				 // console.log(value)
		         this.setState(()=>({pass:value }))
		       }
	}
    tap(){
        // console.log(this.state.user)
		api.getLogin({
			userName:this.state.user,
			password:this.state.pass
		}).then((data)=>{
			console.log(data.data)
			if(data.data.code=="error"){
				message.error('用户名不存在');
			}else{
				console.log(this.state.user)
				localStorage.setItem('token',data.data.token)
				window.location.href="/register?username="+this.state.user
				
			}
		})
		
		
    }

    render(){
		
        return(
            <div>
                <div className={login.head}>
					<img src={require('../img/logo.png')}/>
					<div className={login.hright}>
						<NavLink to="#">
							<Icon type="home" theme="twoTone" twoToneColor="skyblue" className={login.icon}/>
							<span className={login.sp1}>回到首页</span>
						</NavLink>
						<NavLink to="#">
							<span className={login.sp1}>帮助中心</span>
						</NavLink>
						
					</div>
				</div>
				<div className={login.img}>
					<img src={require('../img/banner.jpg')}/>
					<div className={login.banner}>
						<img src={require('../img/banner1.png')}/>
						<div className={login.user}>
							<h2>用户登录</h2>
							<div>
								<Input
									  placeholder="用户名/手机号"
									  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
									  style={{width:"400px",height:"40px"}} 
									  className={login.input}
									  allowClear onChange ={event => this.user(event)}
									/>
								<Input.Password placeholder="填写密码" 
								 style={{width:"400px",height:"40px"}} 
								  className={login.input}
								  allowClear onChange ={event => this.pass(event)}/>
								  
								  <button className={login.ddd} onClick={()=>this.tap()}>登录</button>
								  <NavLink to="#"><span className={login.psw}>忘记密码?</span></NavLink>
							 </div>
							 <div className={login.other}>
								<div className={login.d1}></div>
								<span className={login.type}>选择其它登录方式</span>
								<div className={login.d2}></div>
							 </div>
							 
							 <NavLink to="/wei">
								<img src={require('../img/weixin1.png')} className={login.wei}/>
							 </NavLink>
							 
							 <div className={login.lian}>
								<span>还不是会员?</span>
								<NavLink to="/register">
								 <Button className={login.zhuce}>免费注册</Button>
								 </NavLink>
							 </div>
							
							 
							 
								
							 
							
						</div>
					</div>
				</div>
				
				<div className={login.foot}>
					<div className={login.foot1}>
						<Breadcrumb separator='|'>
							<Breadcrumb.Item>
							  <a href="">关于我们</a>
							</Breadcrumb.Item>
							<Breadcrumb.Item>
							  <a href="">帮助中心</a>
							</Breadcrumb.Item>
							<Breadcrumb.Item>
							  <a href="">购物流程</a>
							</Breadcrumb.Item>
							<Breadcrumb.Item>
							  <a href="">加入我们</a>
							</Breadcrumb.Item>
							<Breadcrumb.Item>
							  <a href="">顾客必读</a>
							</Breadcrumb.Item>
							<Breadcrumb.Item>
							  <a href="">支付方式</a>
							</Breadcrumb.Item>
						  </Breadcrumb>
						<p>Copyright © 2018-2019  珠海罗西尼表业有限公司</p>
						
						<div className={login.last}>
							<NavLink to="#">
							<img src={require('../img/batubiao.png')}/>
							<span className={login.fin}>
							粤公网安备44049102496286号
							</span>
							</NavLink>
							<span className={login.last1}>|</span>
							<NavLink to="#">
							<span className={login.fin}>
							粤ICP备12016145号-3
							</span>
							</NavLink>
						</div>
					</div>
					
				</div>
            </div>
        )
    }
}