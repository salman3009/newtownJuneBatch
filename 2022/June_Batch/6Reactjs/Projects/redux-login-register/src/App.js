import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './Header/Header';
import Login from './Login/Login';
import Register from './Register/Register';



//lazy loading
const Product = React.lazy(()=>import('./Product/Product'));


function App() {


  return (
   <div>
    <BrowserRouter>
    <Header/>
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
