import './App.css';
import React, { useState } from 'react';
import { BrowserRouter,Routes,Route, useSearchParams } from 'react-router-dom';
import Header from './Header/Header';
import Login from './Login/Login';
import Register from './Register/Register';
// import Product from './Product/Product';

//lazy loading
const Product = React.lazy(()=>import('./Product/Product'));


function App() {

  const [getLoginStatus,setLoginStatus] = useState(true);

  const onLoginHandler=()=>{
    setLoginStatus(true);
  }

  const onLogoutHandler=()=>{
    setLoginStatus(false);
  }

  return (
   <div>
    <BrowserRouter>
    <Header getLoginStatus={getLoginStatus}/>
     <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="product" element={<Product/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
