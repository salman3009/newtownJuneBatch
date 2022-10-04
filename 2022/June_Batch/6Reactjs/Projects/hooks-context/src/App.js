import React from 'react';
import { useState } from 'react';
import Container from './Container/Container';

export const UserContext = React.createContext();


function App(){

    const [getCounter,setCounter] = useState(0);
    const [getName,setName] = useState("rajesh");

    const onClickHandler=()=>{
        setCounter(getCounter+1);
    }
  
    return (<div>
        <UserContext.Provider value={{name:getName,counter:getCounter}}>
        <Container counter={getCounter}/>
        <div className='box'>{getCounter}</div> 
        <button onClick={onClickHandler}>Counter</button>
        </UserContext.Provider>
      
    </div>)
  
}

export default App;