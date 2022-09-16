import List from './List';
import './App.css';
import { useState } from 'react';
import Form from './Form';

function App(){

   const [getGlobalList,setGlobalList]=useState({
      mobile:"no",
      price:0,
      discount:0
   });

   const setUpdateHandler=(input)=>{
            console.log(input);
           setGlobalList(input);
   }

   return (<div>
     <div className="form">
      <Form onGetHandler={setUpdateHandler}/>
    </div> 
    <div className="container">
    <List mobile={getGlobalList.mobile} price={getGlobalList.price} discount={`${getGlobalList.discount}%`}/>
    </div>
   </div>)
}

export default App;






