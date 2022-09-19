import { useState } from 'react';
import './App.css';
import FormInput from './FormInput/FormInput';
import List from './List/List';

function App() {

  const [getText,setText]=useState('');
  const [getList,setList] = useState([]);

  const onSetChangeHandler=(event)=>{
    console.log(event.target.value);
    setText(event.target.value);
  }

  const onAddHandler=()=>{
    setList([...getList,getText]);
    console.log(getList);
  }

  const onDeleteHandler=(index)=>{
    let list = getList;
    list.splice(index,1);
    setList([...list]);
  }

  return (
    <div className="App">
     <FormInput onAddHandler={onAddHandler} onSetChangeHandler={onSetChangeHandler} />
     <List onDeleteHandler={onDeleteHandler} list={getList}/>
    </div>
  );
}

export default App;
