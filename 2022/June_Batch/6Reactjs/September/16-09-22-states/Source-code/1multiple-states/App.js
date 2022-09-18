import List from './List';
import './App.css';
import { useState } from 'react';

function App(){

  const [getList,setList]= useState("");

  const [getPrice,setPrice] = useState(0);

  const [getDiscount,setDiscount] = useState(0);

    const onChangeHandler=(event)=>{
      if(event.target.id === "mobile"){
         setList(event.target.value);
      }
      else if(event.target.id === "price"){
         setPrice(event.target.value);
      }
      else if(event.target.id === "discount"){
         setDiscount(event.target.value);
      }
       
    }

  

   return (<div>
     <div className="form">
     Enter Mobile Name:<input type="text" onChange={onChangeHandler} id="mobile"/>
     <br/><br/>
     Enter Price Details:<input type="text" onChange={onChangeHandler} id="price"/>
     <br/><br/>
     Enter Discount Details:<input type="text" onChange={onChangeHandler} id="discount"/>
    
    </div> 
    <div className="container">
    <List mobile={getList} price={getPrice} discount={`${getDiscount}%`}/>
    </div>
   </div>)
}

export default App;






