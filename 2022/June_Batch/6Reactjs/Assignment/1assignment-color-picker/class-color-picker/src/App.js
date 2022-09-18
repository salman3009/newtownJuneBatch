import './App.css';
import ColorSelector from './ColorSelector/ColorSelector';
import Selection from './Selection/Selection';
import { useState } from 'react';
function App() {

  const [nextBackground,setnextBackground]=useState({background:''})
  const [getSelection,setSelection]=useState([{id:0,background:''},{id:1,background:''},{id:2,background:''}]);

  const onSelectorHandler=(input)=>{
    setnextBackground({background:input});
  }

  const applyColor=(index)=>{
        let list = getSelection[index];
        list.background = nextBackground.background;
        setSelection([...getSelection,list])
  }

  return (
    <div className="App">
      <div>
        <ColorSelector onSelectorHandler={onSelectorHandler} color="red"/>
        <ColorSelector onSelectorHandler={onSelectorHandler} color="green" />
        <ColorSelector onSelectorHandler={onSelectorHandler} color="orange"/>
      </div>
      <div>
        <Selection applyColor={applyColor} id="0" nextBackground={getSelection[0].background}/>
        <Selection applyColor={applyColor} id="1" nextBackground={getSelection[1].background}/>
        <Selection applyColor={applyColor} id="2" nextBackground={getSelection[2].background}/>
      </div>

    </div>
  );
}

export default App;
