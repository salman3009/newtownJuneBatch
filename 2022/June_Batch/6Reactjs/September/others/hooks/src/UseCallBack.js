import {useCallback, useEffect, useState} from 'react';
import Count from './Count';


function UseCallBack(){
    const [getAge,setAge]=useState(0);
    const[getSalary,setSalary]=useState(0);


   const changeAgeHandler=useCallback(()=>{
    setAge(getAge+1)
},[getAge])

   const changeSalaryHandler=useCallback(()=>{
    setSalary(getSalary+1000)
},[getSalary]);



    return(<div
    >
        <Count text ="age" count={getAge}/>
        <Count text="salary" count={getSalary}/>

        <button onClick={changeAgeHandler}>Change Age</button>
        <button onClick={changeSalaryHandler}>Change Salary</button>
    </div>)
}

export default UseCallBack;