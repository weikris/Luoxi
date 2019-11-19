import React from 'react';
import {BrowserRouter as Router,Route,NavLink,Redirect} from 'react-router-dom';
import Async from './Async';
import './App.css';
const Home=Async(()=>import('./views/Home'))
const Index=Async(()=>import('./views/Index'))
function App() {
  return (
    <div >
	  <Router>
	  	<div>
	  		{/*<NavLink to="/home">首页</NavLink>
	  			<Route path="/home" component={Home}></Route>*/}
			<Route path="/index" component={Index}></Route>
			<Redirect to="/index"/>
	  	</div>
	  	
	  </Router>
    </div>
  );
}

export default App;
