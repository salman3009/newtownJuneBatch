import { useState } from 'react';
import './App.css';
import ImageList from './ImageList/ImageList';
import Modal from './Modal/Modal';

function App() {

  const [getFlag,setFlag] = useState(false);

  const onChangeImageHandler=()=>{
    setFlag(!getFlag);
  }

  return (
    <div className="App">
      <ImageList onChangeImageHandler={onChangeImageHandler}/>
      {getFlag && <Modal/>}
    </div>
  );
}

export default App;
