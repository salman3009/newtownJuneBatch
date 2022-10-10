import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const User=()=>{
    const input = useLocation();

    useEffect(()=>{
      console.log(input.pathname);
    })

    return (<div>
           Welcome to User component - {input.pathname}
    </div>)
}
export default User;