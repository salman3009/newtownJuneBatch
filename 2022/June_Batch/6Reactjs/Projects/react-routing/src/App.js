import './App.css';
//step1 please install react-router-dom  "react-router-dom": "^6.4.2"
//step2 please import below packages
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import Contact from './Contact/Contact';
import Product from './Product/Product';
import NoMatch from './NoMatch/NoMatch';



function App() {
  return (
   <div>
    {/* step3:Wrapped with BrowserRouter component */}
    <BrowserRouter>
    <Header/>
    {/* step4:Wrapped with Routes component */}
     <Routes>
      {/* step5:provide path and element for navigation */}
      <Route path="" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="*" element={<NoMatch/>}/>
     </Routes>
       {/* <NoMatch/> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
