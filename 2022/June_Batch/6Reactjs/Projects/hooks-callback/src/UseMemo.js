import { useMemo, useState } from "react";
import './App.css';


const UseMemo=()=>{

    const [getCounter,setCounter] = useState(0);

    const [getAge,setAge] = useState(0);

    const onSelectCounter=()=>{
        setCounter(getCounter+1);
    }

    const onSelectAge=()=>{
        setAge(getAge+1);
    }

    const complexCalculation=(num)=>{
        console.log("inside the loop");
          let n = 1000000000 + num;
         for(let i=0;i<n;i++){

         }
            return num;
    }

    const calculation=useMemo(()=>{
       return complexCalculation(getCounter);
    },[getCounter])    

    return (<div className="container">
      <div className="counter">Counter:{getCounter}</div>
      <button onClick={onSelectCounter}>Counter</button>
      <div className="counter">{calculation}</div>
      <div className="counter">Age:{getAge}</div>
      <button onClick={onSelectAge}>Age</button>
    </div>)
}

export default UseMemo;