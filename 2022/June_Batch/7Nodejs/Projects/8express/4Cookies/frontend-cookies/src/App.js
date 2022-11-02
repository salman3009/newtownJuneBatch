import {useEffect} from 'react';
import './App.css';
import axios from 'axios';


function App() {

  useEffect(()=>{

    axios.get('http://localhost:8000/setcookie').then((response)=>{
      const cookieData = document.cookie;
       console.log(cookieData)
    })
  },[]);


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
