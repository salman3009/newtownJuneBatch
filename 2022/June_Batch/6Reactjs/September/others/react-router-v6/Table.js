import { useEffect } from "react";
import { context } from './App';
function Table(props){
  
  useEffect(()=>{
      console.log(props.text);
  });

    return(<div>
        <context.Consumer>
            {
                (obj)=>{
                    return <div>{obj} salman</div>
                }
            }
        </context.Consumer>
    </div>)
}

export default Table;