import React from 'react';
import {BrowserRouter as Router,Route,NavLink,Redirect} from 'react-router-dom'
// import Home from './views/Home'
// import About from './views/About'
import Async from './Async'
import './App.css'

const Login=Async(()=>import('./views/Login'))
const Register=Async(()=>import('./views/Register'))
const Wei=Async(()=>import('./views/Wei'))
const Detail=Async(()=>import('./views/Detail'))

function App() {
  return (
    <div >
      <Router>
        <div>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/wei" component={Wei}/>
		  <Route path="/detail" component={Detail}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
