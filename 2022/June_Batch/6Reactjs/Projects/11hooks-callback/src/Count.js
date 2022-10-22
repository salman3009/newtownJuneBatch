import React from "react";

const Count=(props)=>{
     console.log(props.type);
     return <div>{props.type} Count - {props.list}</div>
}
export default React.memo(Count);