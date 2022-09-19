import { useState } from 'react';
import './App.css';
import FormInput from './FormInput/FormInput';
import List from './List/List';

function App() {

  const [getText,setText]=useState('');

  const onSetChangeHandler=(event)=>{
    console.log(event.target.value);
    setText(event.target.value);
  }

  return (
    <div className="App">
     <FormInput  onSetChangeHandler={onSetChangeHandler} />
     <List getText={getText}/>
    </div>
  );
}

export default App;
