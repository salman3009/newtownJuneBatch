import './App.css';
import CounterInput from './CounterInput/CounterInput';
import CounterButton from './CounterButton/CounterButton';
import CounterDisplay from './CounterDisplay/CounterDisplay';
import { useState } from 'react';

function App() {

  const [getCounter,setCounter]=useState(0);

  const onChangeHandler=(input)=>{
    setCounter(input);
  }

  const onIcrementHandler=()=>{
     setCounter(getCounter+1);
  }

  const onDecrementHandler=()=>{
    setCounter(getCounter-1);
  }

  return (
    <div className="App">
       <CounterInput onChangeHandler={onChangeHandler}/>
       <CounterButton onIcrementHandler={onIcrementHandler} onDecrementHandler={onDecrementHandler}/>
       <CounterDisplay counter={getCounter}/>
    </div>
  );
}

export default App;
