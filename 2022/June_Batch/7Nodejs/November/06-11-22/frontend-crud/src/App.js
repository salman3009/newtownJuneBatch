import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [getList,setList]=useState([]);

  useEffect(()=>{
    initialDataList();
  },[]);

  const initialDataList=()=>{
    axios.get("http://localhost:8080").then((response)=>{
       console.log(response);
       setList([...response.data.list])
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
         {getList.map((obj,index)=>{
             return (<tr key={index}>
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
