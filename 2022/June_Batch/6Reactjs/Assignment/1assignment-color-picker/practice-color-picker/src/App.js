import React, { useState } from "react";
import './App.css';

import ColourSelector from './ColorSelector/ColorSelector.js';
import Selection from "./Selection/Selection";




const App = () => {
 
  const [nextBackground,setColor] = useState('');

  const [getSelection,setSelection] = useState([{id:0,color:''},{id:1,color:''},{id:2,color:''}]);

  const onSelectorHandler=(input)=>{
    setColor(input);
  }

  const onSelectionHandler=(index)=>{
          let list = getSelection[index];
          list.color= nextBackground;
          setSelection({...getSelection,list});
  }

  return (
    <div>
      <div>
      <ColourSelector color="red" onSelectorHandler={onSelectorHandler}/>
   <ColourSelector color="blue" onSelectorHandler={onSelectorHandler}/>
   <ColourSelector color="green" onSelectorHandler={onSelectorHandler}/>
      </div>
      <div>
      <Selection id="0" onSelectionHandler={onSelectionHandler} applyColor={getSelection[0].color}/>
   <Selection id="1" onSelectionHandler={onSelectionHandler} applyColor={getSelection[1].color}/>
   <Selection id="2" onSelectionHandler={onSelectionHandler} applyColor={getSelection[2].color}/>
      </div>


    </div>

  )
}


export default App;
