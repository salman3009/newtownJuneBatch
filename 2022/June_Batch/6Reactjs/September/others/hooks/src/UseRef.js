import {useEffect, useRef} from 'react';

function UseRef(){

    const inputRef = useRef(null);
    useEffect(()=>{
        //inputRef.current.focus();
         inputRef.current.disabled = true;
         inputRef.current.value="123";
         console.log(inputRef.current);
    },[])


    return(<div
    >
    <input  ref={inputRef} type="text"/>    
    </div>)
}

export default UseRef;