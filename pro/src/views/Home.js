import React,{Component} from 'react';
import {BrowserRouter as Router,Route,NavLink,Prompt} from 'react-router-dom';
import Other from './Other'
import home from './Home.module.css'
export default class Home extends Component{
    constructor(props){
        super(props)
    }

    tap(){
        // this.props.history.push('/about')
        window.location.href='/about'
    }

    render(){
        return(
            <div>
                <h2 className={home.tit}>home</h2>
                <button onClick={()=>this.tap()}>去about</button>
                <Prompt message="确定要离开吗？" when={true}/>
                <Router>
                    <div>
                        <NavLink to="/other">other</NavLink>
                        <Route path='/other' component={Other}></Route>
                    </div>
                </Router>
            </div>
        )
    }
}