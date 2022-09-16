//https://blog.bitsrc.io/automatic-batching-in-react-18-what-you-should-know-d50141dc096e
import "./App.css";
import { useState } from "react";
const App = () => {
const [count, setCount] = useState(0);
const [clicked, setClicked] = useState(false);
console.log("React 18 Application Re-Rendering");
// click event
const handleClick = () => {
  // 1 Re-Render
  setClicked(!clicked);setCount(count + 1); 
};
  
// async operation
const handleAsyncClick = () => {      
  fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
    // trigger 1 re-render due to React 18 Improved Batching
    setClicked(!clicked);
    setCount(count + 1);
  });
};
  
// timeout/interval
const handleTimeOutClick = () => {
  setTimeout(() => {
     // trigger 1 re-render due to React 18 Improved Batching
     setClicked(!clicked);
    setCount(count + 1); 
   });
 };
    
 return (
   <div className="App">
    <header className="App-header">
       <div> Count: {count} </div>
       <div> Clicked: {clicked} </div>
       <button onClick={handleClick}> Event Handler </button>
       <button onClick={handleAsyncClick}> Async Handler </button>
       <button onClick={handleTimeOutClick}> Timeout Handler </button>
     </header>
   </div>
 );
};
    
export default App;