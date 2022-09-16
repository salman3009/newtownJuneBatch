import { useState ,useMemo} from "react";

function UseMemo(props){

    const[getCount,setCount]=useState(0);

    const[getAge,setAge]=useState(0);

    const incrementHandler=()=>{
        setCount(getCount+1)
    }

    const  ageHandler=()=>{
        setAge(getAge+1)
    }

    const Even=useMemo(()=>{
        let i=0;
        while(i<20){
         console.log(i);
         i++;
        }
        return getCount%2===0;
    },[getCount])
      
    

  
  
  
    return(<div
    >
        {getCount}<br/>
    <button onClick={incrementHandler}>Increment</button><br/>
    <button onClick={ageHandler}>age</button><br/>
     {Even ? "even number":"odd number"}
    </div>)
}

export default UseMemo;