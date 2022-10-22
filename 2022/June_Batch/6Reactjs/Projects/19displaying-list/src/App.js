import { useState } from 'react';
import './App.css';
import FormInput from './FormInput/FormInput';
import List from './List/List';

function App() {

  const [getText,setText]=useState('');
  const [getList,setList] = useState([]);
  const [getEdit,setEdit] = useState(false);
  const [getIndex,setIndex]=useState(-1);

  const onSetChangeHandler=(event)=>{
    console.log(event.target.value);
    setText(event.target.value);
  }

  const onAddHandler=()=>{
    setList([...getList,getText]);
    console.log(getList);
    setText('');
  }

  const onEditHandler=(index)=>{
    setEdit(true);
    setText(getList[index]);
    setIndex(index);
  }

  const onEditSubmit=()=>{
     let list=getList;
     list[getIndex]= getText;
     setList([...list]);
     setText('');
     setEdit(false);
  }

  const onDeleteHandler=(index)=>{
    let list = getList;
    list.splice(index,1);
    setList([...list]);
  }

  return (
    <div className="App">
     <FormInput value={getText} onEditSubmit={onEditSubmit} typeStatus={getEdit} onAddHandler={onAddHandler} onSetChangeHandler={onSetChangeHandler} />
     {getList && getList.length>0 && <List onEditHandler={onEditHandler} onDeleteHandler={onDeleteHandler} list={getList}/>}
    </div>
  );
}

export default App;
