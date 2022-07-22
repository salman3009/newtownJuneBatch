import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import loader from './assets/loader.gif';
import UserService from './services/Userservice';
import './App.css';

export const UserComponent = () => {
  
  const dispatch = useDispatch();

  const usersInfo = useSelector((state) => state.usersData);


   useEffect(() => {
        UserService.loadUsers(dispatch);
    }, [dispatch])



  
  const errorContainer = () => {
    return <div>ERROR IN API</div>;
  }
  
  const showLoader = () => {
    return <div><img src={loader} alt="loading ..." title ="loading ..."/></div>;
  }

  const renderData = (usersInfo) => {
    return usersInfo.error ? errorContainer():
    <div className="container">
        <div className="header">
        <div>NAME</div>
        <div>EMAIL</div>
        <div>PHONE</div>
        <div>WEBSITE</div>    
      </div>
    {usersInfo.usersList.map((user, index) =>
        <div className="row" key={index}>
        <div> { user.name } </div>
        <div>{ user.email }</div>
        <div>{ user.phone } </div>
        <div>{ user.website } </div>    
        </div>
  )}
  </div>
  }

  return (    
    usersInfo.loading ? showLoader() : renderData(usersInfo)
  )
}

export default UserComponent;
