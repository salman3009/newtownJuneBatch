import { useState } from "react";
import axios from 'axios';
const Form = () => {

     const [getForm,setForm]=useState({
        title:'',
        amount:0,
        duration:0
     });

     const onChangeHandler=(event)=>{
        setForm({
            ...getForm,
           [event.target.name]:event.target.value
        })
     }

     const onSubmitHandler=(event)=>{
         event.preventDefault();
         axios.post('http://localhost:3000/product',getForm).then((response)=>{
           console.log(response);
         }).catch((error)=>{
            console.log(error);
         })
     }

    return (<div>
        <form>
            <div class="form-group">
                <label>Title</label>
                <input type="text" onChange={onChangeHandler}  class="form-control" name="title" />
            </div>
            <div class="form-group">
                <label>Amount</label>
                <input type="text"  onChange={onChangeHandler} class="form-control" name="amount" />
            </div>
            <div class="form-group">
                <label>Duration</label>
                <input type="text"  onChange={onChangeHandler} class="form-control" name="duration" />
            </div>
            <button onClick={onSubmitHandler} type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>)
}
export default Form;