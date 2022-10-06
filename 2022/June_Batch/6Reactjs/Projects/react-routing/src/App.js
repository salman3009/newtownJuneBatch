import './App.css';
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
       <Header/>
       {/* <Home/> */}
       {/* <Login/> */}
       {/* <Register/> */}
       {/* <Contact/> */}
       <Product/>
       <NoMatch/>
    </div>
  );
}

export default App;
