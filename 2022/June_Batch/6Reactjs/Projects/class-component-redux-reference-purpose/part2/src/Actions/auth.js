import axios from 'axios';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
}from './types';


//Register User
export const register =({
    name,email,password
})=>async dispatch=>{
  debugger;
    const config ={
        headers:{
        'Content-Type':'application/json'
        }
    }
    
    const body = JSON.stringify({name,email,password});

    try{
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos',body,config);
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        });
    }
    catch(err)
    {
     dispatch({
            type:REGISTER_FAIL
        });
    }
}



//Register User
export const logout =()=>async dispatch=>{
     dispatch({
            type:REGISTER_FAIL
        });   
}