import React from 'react';
import {FRIInput} from './FRIInput';

export const FRParentInput=()=>{

    const inputRef = React.createRef();

    const clickHandler=()=>{
        inputRef.current.focus();
    }

    return(<div>
        <FRIInput ref={inputRef}/>
        <button onClick={clickHandler}>Focus input</button>
    </div>)
}