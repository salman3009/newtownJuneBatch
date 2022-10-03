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
 
    const Even=(num)=>{
       console.log("caculate");
       for (let i = 0; i < 1000000000; i++) {
          num += 1;
        }
        return num;
    }
   // const calculation = Even(getCount);
   const calculation = useMemo(() => Even(getCount), [getCount]);
    
    
    return(<div
    >
        {getCount}<br/>
    <button onClick={incrementHandler}>Increment</button><br/>
    <button onClick={ageHandler}>age</button><br/>
     {calculation}
    </div>)
}

export default UseMemo;