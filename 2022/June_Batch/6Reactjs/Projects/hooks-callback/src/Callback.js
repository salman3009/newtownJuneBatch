import { useState } from 'react';
import Count from './Count'

const Callback=()=>{

    const [getAge,setAge]=useState(0);
    const [getSalary,setSalary] = useState(0);

    const getAgeHandler=()=>{
        setAge(getAge+1);
    }

    const getSalaryHandler=()=>{
        setSalary(getSalary+1);
    }

    return <div>
        callback
        <Count type="age" list={getAge}/>
        <Count type="salary" list={getSalary}/>
        <button onClick={getAgeHandler}>Age</button>
        <button onClick={getSalaryHandler}>Salary</button>
    </div>
}

export default Callback;