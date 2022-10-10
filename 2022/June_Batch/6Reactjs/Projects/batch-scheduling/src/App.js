import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [getFlag,setFlag] = useState(false);
  const [getCount,setcount] = useState(0);

  console.log("React rendering");

  useEffect(()=>{
     console.log("getFlag is changed");
  },[getFlag]);

  useEffect(()=>{
    console.log("getCount is changed");
  },[getCount]);

  //batch scheduling
  const onClickHandler=()=>{
    console.log("first line");
    //all state code are async code
    setFlag(!getFlag);
    console.log("second line");
    setcount(getCount+1);
    console.log("third line");
  }

  const display=()=>{
     console.log("display");
  }
  display();

  return (
    <div className="App">
      <button onClick={onClickHandler}>Click</button>
    </div>
  );
}

export default App;
