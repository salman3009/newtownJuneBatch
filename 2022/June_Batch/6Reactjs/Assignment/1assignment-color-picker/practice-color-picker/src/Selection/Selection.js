import React from 'react';
import './Selection.css';

const Selection = (props) => {
  return (
    <div className="fix-box">
 <div style={{backgroundColor:props.applyColor}} className="container-selection" onClick={()=>props.onSelectionHandler(props.id)}>Selection</div>
    </div>
   
  )
}
export default Selection;
