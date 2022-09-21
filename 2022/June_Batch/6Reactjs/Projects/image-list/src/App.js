import { useState } from 'react';
import './App.css';
import ImageList from './ImageList/ImageList';
import Modal from './Modal/Modal';

function App() {

  const [getFlag,setFlag] = useState(false);
  const [getIndex,setIndex] = useState(0);

  const onChangeImageHandler=()=>{
    setFlag(!getFlag);
  }

  const onChangeIndeHandler=(event)=>{
       setIndex(event.target.value);
  }

  return (
    <div className="App">
      <ImageList id={getIndex} onChangeImageHandler={onChangeImageHandler}/>
      {getFlag && <Modal onChangeIndeHandler={onChangeIndeHandler} />}
    </div>
  );
}

export default App;
