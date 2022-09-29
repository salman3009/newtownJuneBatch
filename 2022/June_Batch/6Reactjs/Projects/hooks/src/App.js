import { useEffect, useState } from 'react';
import './App.css';
import List from './List';
import Reducer from './Reducer';
const App = () => {

  const [getCount, setCount] = useState(0);
  const [getFlag, setFlag] = useState(true);

  //Only one time it is going to call
  //similar to componentDidMount
  useEffect(() => {
    // alert("only one time it is going to call");
    setCount(1);
  }, [])

  //It is going to call everytime when there is change in state
  //similar to componentDidUpdate
  // useEffect(() => {
  //   alert("It is going to call everytime updates happens");
  //   if (getCount >= 5) {
  //     setCount(1);
  //   }
  // })


  useEffect(() => {
    //alert("It is going to call on particular state updates");
    if (getCount >= 5) {
      setCount(1);
    }
  },[getCount])

  const onIncrementHandler = () => {
    setCount(getCount + 1);

  }

  const onDecrementHandler = () => {
    setCount(getCount - 1);
  }

  const flagHandler = () => {
    setFlag(!getFlag);
  }

  const onNeutralHandler=()=>{
    setCount(1);
  }

  return (<>
    <div className="container">
      <h5>UseState</h5>
      <div>
        <input type="text" value={getCount} readOnly />
      </div>
      <div>
        <button onClick={onIncrementHandler}>Increment</button>
        <button onClick={onDecrementHandler}>Decrement</button>
        <button onClick={onNeutralHandler}>Neutral</button>
      </div>

    </div>
    <div className="container">
      <div>
        <button onClick={flagHandler}>Show/Hide</button>
      </div>
      <div>
        {getFlag && <List />}
      </div>
      <div>
      </div>
    </div>
    <Reducer/>
  </>)

}
export default App;