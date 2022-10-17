import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Header=()=>{
  return (
    <div>
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html"><i className="fas fa-code"></i> DeveloperConnect</a>
      </h1>
      <ul>
        <li><Link to='/'>Developers</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
      </ul>
    </nav>
    <Switch>
    <Route path='/'  exact component={Landing}/>
    <Route path='/login'  exact component={Login}/>
    <Route path='/register'  exact component={Register}/>
    </Switch>
  
    </div>
     
  )
}

export default Header;