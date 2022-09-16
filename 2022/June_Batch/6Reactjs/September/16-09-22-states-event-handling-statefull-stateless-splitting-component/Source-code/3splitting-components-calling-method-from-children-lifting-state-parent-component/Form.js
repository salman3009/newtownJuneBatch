import './Form.css';
import { useState } from 'react';
const Form=(props)=>{
    const [getList,setList]= useState({
        mobile:'no mobile',
        price:2000,
        discount:2000
     });
   
       const onChangeHandler=(event)=>{
         // setList({mobile:"samsung"})
         // setList({[event.target.name]:event.target.value});
         setList({...getList,[event.target.name]:event.target.value});
       }

       const onSubmitHandler=()=>{
         props.onGetHandler(getList);
       }

       return(<div className="form">
            <h1>Form Input</h1>
            Enter Mobile Name:<input type="text"  name="mobile" onChange={onChangeHandler} id="mobile"/>
     <br/><br/>
     Enter Price Details:<input type="text" name="price" onChange={onChangeHandler} id="price"/>
     <br/><br/>
     Enter Discount Details:<input type="text" name="discount" onChange={onChangeHandler} id="discount"/>
     <br/><br/>
     <button onClick={onSubmitHandler}>Submit</button>
       </div>)
}

export default Form;