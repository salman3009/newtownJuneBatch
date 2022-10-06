import React from "react";

const FormInput=React.forwardRef((props,myref)=>{
    return (<>
    <input type="text" onChange={props.onChangeHandler} ref={myref} />
    </>)
})
export default FormInput;
