import { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [getList,setList]=useState([]);
  const indexRef = useRef(null);
  const [getError,setError]=useState('');

  useEffect(()=>{
    initialDataList();
  },[]);

  const initialDataList=()=>{
    indexRef.current.value = '';
    axios.get("http://localhost:8080").then((response)=>{
       console.log(response);
       setList([...response.data.list])
    }).catch((error)=>{
       console.log(error);
    })
  }

  const getIndexValue=()=>{
     let index = Number(indexRef.current.value);
     axios.get(`http://localhost:8080/${index}`).then((response)=>{
          console.log(response);
          let result =[response.data.result];
          setList([...result]);
          setError('');
     }).catch((error)=>{
      if(error.response.data){
        setError(error.response.data.message);
      }
     })
  }

  return (
    <div className="App">
       <table>
        <tr>
          <td>Index:<input ref={indexRef} type="text" name="id"/></td>
        </tr>
        <tr>
          <td><button onClick={getIndexValue}>Submit</button>
          <button onClick={initialDataList}>Reset</button>
          </td>
 
        </tr>
       </table>
       {getError}
       {getError=='' && <table>
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
       </table>}
       
    </div>
  );
}

export default App;
