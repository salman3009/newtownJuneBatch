import { useState } from 'react';
import './CounterInput.css';
const CounterInput =(props)=>{

    const onChangeInput=(event)=>{
              props.onChangeHandler(parseInt(event.target.value));
    }

    return(<div className="container">
        <p>Enter the Counter Value</p>
        <input type="number" onChange={onChangeInput} name="counter"/>
    </div>)
}

export default CounterInput;