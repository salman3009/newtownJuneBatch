import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [getList,setList]=useState([]);

  useEffect(()=>{
    initialDataList();
  },[]);

  const initialDataList=()=>{
    axios.get("").then((response)=>{
       console.log(response);
    }).catch((error)=>{
       console.log(error);
    })
  }

  return (
    <div className="App">
       <table>
         <tr>
          <td>FullName</td>
          <td>Age</td>
          <td>Location</td>
         </tr>
         {getList.map((obj)=>{
             return (<tr>
              <td>{obj.fullName}</td>
              <td>{obj.age}</td>
              <td>{obj.location}</td>
             </tr>)
         })}
       </table>
    </div>
  );
}

export default App;
