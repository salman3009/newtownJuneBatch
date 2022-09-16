import React from "react";

export const FRIInput=React.forwardRef((props,ref)=>{
   return(<div>
     <input type="text" ref={ref}/>
   </div>)
})