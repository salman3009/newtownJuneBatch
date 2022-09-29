import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    //Runs on every render
  });
  
  useEffect(() => {
    //Runs only on the first render
  }, []);

  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
  }, [prop, state]);

  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);