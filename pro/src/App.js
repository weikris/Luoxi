import React from 'react';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom'
// import Home from './views/Home'
import Async from './Async'
import './App.css'
import Detail from './views/Detail'
const Login=Async(()=>import('./views/Login'))
const Register=Async(()=>import('./views/Register'))
const Wei=Async(()=>import('./views/Wei'))
const Public=Async(()=>import('./views/Public'))
const Home=Async(()=>import('./views/Home'));
const Product=Async(()=>import('./views/Product'))
const Introduce=Async(()=>import('./views/Introduce'))

function App() {
  return (
    <div>
	
      <Router>
        <div>
		<Route path="/detail/:id" component={Detail}/>
		<Route path="/home" component={Home}></Route>
		<Route path='/product' component={Product}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/wei" component={Wei}/>
		  <Route path="/public" component={Public}></Route>
      <Route path="/introduce" component={Introduce}></Route>
      
		  <Redirect to="/home"/>
		 

        </div>
      </Router>
    </div>
  );
}

export default App;
