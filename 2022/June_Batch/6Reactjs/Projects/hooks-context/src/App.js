import { useState } from 'react';
import Container from './Container/Container';

function App(){

    const [getCounter,setCounter] = useState(0);

    const onClickHandler=()=>{
        setCounter(getCounter+1);
    }
  
    return (<div>
        <Container counter={getCounter}/>
        <div className='box'>{getCounter}</div> 
        <button onClick={onClickHandler}>Counter</button>
    </div>)
  
}

export default App;