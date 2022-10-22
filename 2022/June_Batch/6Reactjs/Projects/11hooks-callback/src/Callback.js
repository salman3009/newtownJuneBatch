import { useCallback, useState } from 'react';
import Count from './Count'

const Callback=()=>{

    const [getAge,setAge]=useState(0);
    const [getSalary,setSalary] = useState(0);

    //normal function rerender will happen for all jsx code
    // const getAgeHandler=()=>{
    //     setAge(getAge+1);
    // }

    //wrapped with usecallback to avoid unnecessary rendering of other component.
    const getAgeHandler= useCallback(()=>{
        setAge(getAge+1);
    },[getAge])

    //normal function rerender will happen for all jsx code
    // const getSalary=()=>{
    //     setSalary(getSalary+1);
    // }

    //wrapped with usecallback to avoid rendering of other component
    const getSalaryHandler=useCallback(()=>{
        setSalary(getSalary+1);
    },[getSalary])


    return <div>
        callback
        <Count type="age" list={getAge}/>
        <Count type="salary" list={getSalary}/>
        <button onClick={getAgeHandler}>Age</button>
        <button onClick={getSalaryHandler}>Salary</button>
    </div>
}

export default Callback;