// 一个函数接受一个函数／组件为参数,该函数返回一个组件,这个组件叫做高阶组件(HOC)
import React,{Component} from 'react';

export default function Async(importComponent){
	class App extends Component{
		constructor(props){
			super(props)
			this.state={
				component:null
			}
		}
		
		render(){
			const C=this.state.component;
			return C?<C/>:null;
		}
		
		async componentDidMount(){
			let {default:components}=await importComponent();
			this.setState({component:components})
		}
		
		
	}
	
	return App
}