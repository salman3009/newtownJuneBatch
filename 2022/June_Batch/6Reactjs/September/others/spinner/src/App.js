import LoadingSpinner from "./LoadingSpinner";
import { useState } from "react";
export default function App() {

  // State to display error message
  const [isLoading, setIsLoading] = useState(true);  

   setTimeout(()=>{
    setIsLoading(false);
   },5000)
  


  return (
    <div className="App">
    {isLoading ? <LoadingSpinner /> : "success"}
  
  </div>
  );
}
