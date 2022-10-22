import { useReducer } from 'react';
import './App.css';


const Reducer = () => {

    const initialState = 1;

    function reducer(state,action){
        switch(action){
            case 'increment':
                 return state+1;
            case 'decrement':
                 return state-1;
            case 'neutral':
                  return 1;
            default:
                 return 0;
        }

    }

    const [count,dispatch]=useReducer(reducer,initialState);


    return <div className="container">
        <h5>UseReducer</h5>
        <div>
            <input type="text" value={count} readOnly />
        </div>
        <div>
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('neutral')}>Neutral</button>
        </div>

    </div>
}

export default Reducer;