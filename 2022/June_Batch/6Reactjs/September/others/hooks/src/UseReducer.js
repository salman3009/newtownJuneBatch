import {useReducer} from 'react';

function UseReducer(){

    const initialState = 0;

    const reducer=(state,action)=>{
  
      switch(action){
        case 'increment':
                return state+1;
        case 'decrement':
                return state-1;
        default:
                 return state;     
      }
    }
  
    const [count,dispatch] = useReducer(reducer,initialState);

    return(<div
    >
        <p>Count:{count}</p>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>
    </div>)
}

export default UseReducer;