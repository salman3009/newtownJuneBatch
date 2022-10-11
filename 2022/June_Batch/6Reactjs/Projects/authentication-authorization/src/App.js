import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route, useSearchParams } from 'react-router-dom';
import Header from './Header/Header';
import Login from './Login/Login';
import Register from './Register/Register';

// import Product from './Product/Product';

//lazy loading
const Product = React.lazy(()=>import('./Product/Product'));


function App() {

  useEffect(()=>{
    sessionStorage.setItem("token",false);
  },[])

  return (
   <div>
    <BrowserRouter>
     <Routes>
      <Route path="" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="product" element={<Product/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
