import React from 'react';
import {BrowserRouter as Router,Route,NavLink,Redirect} from 'react-router-dom';
import Async from './Async';
import './App.css';
const Home=Async(()=>import('./views/Home'))
function App() {
  return (
    <div >
      <h2>罗尼西</h2>
	  <Router>
	  	<div>
	  		<NavLink to="/home">首页</NavLink>
	  			<Route path="/home" component={Home}></Route>>
	  	</div>
	  	
	  </Router>
    </div>
  );
}

export default App;
