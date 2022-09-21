import './Modal.css';
import  ReactDOM  from 'react-dom';
import { useState } from 'react';


const Modal =(props)=>{


    const [getList,setList]=useState(['image1','image2','image3','image4']);
    const rootElement = document.getElementById("element-root");
    return ReactDOM.createPortal(
    <div className="modal">
        <select onChange={props.onChangeIndeHandler}>
            {getList.map((obj,index)=>{
               return (<option value={index} key={index}>{obj}</option>)
            })}  
        </select>
    </div>,
    rootElement);
}

export default Modal;