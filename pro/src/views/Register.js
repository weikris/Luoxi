import React,{Component} from 'react';
import {BrowserRouter as Router,Route,NavLink,Prompt} from 'react-router-dom';
import register from '../css/Register.module.css'
import { Input, Tooltip, Icon, Button,Breadcrumb,Checkbox,message} from 'antd';
import * as api from '../api/getProd';


export default class Register extends Component{
    constructor(props){
            super(props);
            this.state = {
               username:'',
			   password:'',
			   repeatpsw:'',
			   check:''
			  
            }
            
        }
   inputChange=(e)=>{
	   let check1=`${e.target.checked}`;
	   
	   this.setState({check:check1})
	   
   }
   
   // 用户名
   user=(event)=>{
   	    if(event && event.target && event.target.value){
   	         let value = event.target.value;
   			 // console.log(value)
   	         this.setState(()=>({username:value }))
   	       }
   }
   // 密码
   pass=(event)=>{
   	    if(event && event.target && event.target.value){
   	         let value = event.target.value;
   			 // console.log(value)
   	         this.setState(()=>({password:value }))
   	       }
   }
   // 确认密码
   pass1=(event)=>{
   	    if(event && event.target && event.target.value){
   	         let value = event.target.value;
   			 // console.log(value)
   	         this.setState(()=>({repeatpsw:value }))
   	       }
   }
   
   
   getInput=()=>{
	   // console.log(this.state.username)
	   // 用户名
	   var reg=/^1(3|4|5|6|7|8|9)\d{9}$/
	   var reg1=/^[a-zA-Z_]\w{5,19}$/
	   var user=this.state.username
	   var pass=this.state.password
	   var pass1=this.state.repeatpsw
	   if(!reg.test(user)){
		    alert("手机号格式不正确")
	   }else if(user==""){
		   message.warning('手机号不能为空');
	   }
	   if(!reg1.test(pass)){
		 message.warning('密码格式不正确');
	   }else if(!reg1.test(pass1)){
		   message.warning('密码格式不正确');
	   }else if(pass!=pass1){
		   message.warning('两次密码不一致');
	   }else if(pass==""||pass1==""){
		   message.warning('密码不能为空');
	   }
	   
	   console.log(user)
	   // var check=this.state.check
	 
		   if(this.state.check=="false"||this.state.check==""){
		   		    message.warning("请勾选协议")   
			}else{
				api.getRegister({
						   userName:this.state.username,
						   password:this.state.password,
									   nickName:'',
									   avatar:''
				}).then((data)=>{
						console.log(data.data.code)
						if(data.data.code=="error"){
							 message.warning("用户名已存在")
						}else{
							message.success('注册成功');
							
						}
				})
			}
	  
	   
   }

    render(){
        return(
            <div>
                <div className={register.head}>
                	<img src={require('../img/logo.png')}/>
                	<div className={register.hright}>
                		<NavLink to="/home">
                			<Icon type="home" theme="twoTone" twoToneColor="skyblue" className={register.icon}/>
                			<span className={register.sp1}>回到首页</span>
                		</NavLink>
                		<NavLink to="#">
                			<span className={register.sp1}>帮助中心</span>
                		</NavLink>
                		
                	</div>
                </div>
				{/*中间*/}
				<div className={register.banner}>
				<h1>用户注册</h1>
					<div className={register.left}>
					
						<p>
						<span className={register.left1}>手机号:</span>
						<Input
							  placeholder="请输入11位手机号"
							  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
							  style={{width:"400px",height:"40px"}} 
							  className={register.input}
							  ref="username" allowClear onChange ={event => this.user(event)}
							  />
						</p>
						<p>
						<span className={register.left1}>密码:</span>
						
						  <Input
							type="password"
						  	  placeholder="6-20个字符，请不要输入非法字符"
						  	  style={{width:"400px",height:"40px"}} 
						  	  className={register.input}
						  	  ref="password"
						  	  allowClear onChange ={event => this.pass(event)}/>
						</p>
						<p>
						<span className={register.left1}>确认密码:</span>
						<Input type="password" placeholder="再次填写密码"
						 style={{width:"400px",height:"40px"}} 
						 ref="repeatpsw"
						allowClear onChange ={event => this.pass1(event)}
						  className={register.input}
						 />
						 
						</p>
						<p className={register.xie}>
							<Checkbox onChange={this.inputChange}>我已阅读并同意<span>会员注册协议</span>和<span>隐私保护政策</span></Checkbox>
							
						</p>
						
						 <button onClick={this.getInput}
						 style={{width:"200px",height:"40px",border:0,background:"#0085A1",margin:"0 0 0 80px",cursor:"pointer"}} >登录</button>
					</div>
					<div className={register.right}>
						<div>
							<span>已有会员账号,请直接登录</span>
							<NavLink to="/login"><button className={register.btn}>转到登录页</button></NavLink>
						</div>
					</div>
				</div>
            </div>
        )
    }
}