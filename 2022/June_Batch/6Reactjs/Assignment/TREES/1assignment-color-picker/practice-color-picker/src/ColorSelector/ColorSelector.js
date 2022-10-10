import React from 'react';
import './ColorSelector.css';

const ColourSelector = (props) => {
  return (
    <div style={{background:props.color}}  onClick={()=>props.onSelectorHandler(props.color)}className="container-selector">colorSelector</div>
  )
}
export default ColourSelector;
