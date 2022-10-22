import React from "react";
import {useDispatch, useSelector } from "react-redux";
import {increment,decrement,restart,userincrement} from './redux/counter';


export default function App() {

  const object = useSelector((state)=>state.counter);
  const dispatch = useDispatch();

  console.log(object);


  return (
    <div className="App">
      <h1> The count is: {object.count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(restart())}>Restart</button>
      <button onClick={()=>dispatch(userincrement(30))}>Increment By 30</button>
     
    </div>
  );
}
