import React from "react";

const InputForwardRef=React.forwardRef((props,refType)=>{
   return <input {...props} ref={refType}/>
})
export default InputForwardRef;