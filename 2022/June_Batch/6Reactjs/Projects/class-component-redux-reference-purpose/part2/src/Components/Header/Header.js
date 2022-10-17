import React from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import {logout} from '../../Actions/auth';
import Register from '../Register/Register';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header=({isAuthenticated,logout})=>{

  const logoutHandler=()=>{
    logout();
  }

  return (
    <div>
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html"><i className="fas fa-code"></i> DeveloperConnect</a>
      </h1>
      {!isAuthenticated?<div>
        <ul>
        <li><Link to='/'>Developers</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
      </ul>
      </div>:<div>
      <ul>
        <li><Link to='/'>Developers</Link></li>
        <li><Link onClick={logoutHandler}>Logout</Link></li>
      </ul>
        </div>}
      
    </nav>
    <Switch>
    <Route path='/'  exact component={Landing}/>
    <Route path='/login'  exact component={Login}/>
    <Route path='/register'  exact component={Register}/>
    </Switch>
  
    </div>
     
  )
}

Header.propTypes ={
  isAuthenticated:PropTypes.bool,
  logout:PropTypes.func.isRequired
}

const mapStateToProps = state =>({
  isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps,{logout})(Header);
