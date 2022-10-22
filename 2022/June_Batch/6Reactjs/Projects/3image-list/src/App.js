import React, { useState } from 'react';
import './App.css';
import ImageList from './ImageList/ImageList';
import Modal from './Modal/Modal';

function App() {

  const [getFlag, setFlag] = useState(false);
  const [getIndex, setIndex] = useState(0);

  const onChangeImageHandler = () => {
    setFlag(!getFlag);
  }

  const onChangeIndeHandler = (event) => {
    setIndex((PreviousState) => {
      console.log(PreviousState, event.target.value);
      if (PreviousState == 1) {
        return PreviousState;
      }
      return event.target.value;
    });
  }

  return (
    <React.Fragment>
      <ImageList id={getIndex} onChangeImageHandler={onChangeImageHandler} />
      {getFlag && <Modal onChangeIndeHandler={onChangeIndeHandler} />}
    </React.Fragment>
  );
}

export default App;
