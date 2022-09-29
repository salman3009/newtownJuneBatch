import { useEffect } from "react";


const List=()=>{

    //similar to component willunmount
    //whenver you remove this component form DOM
    useEffect(()=>{
        const details = setInterval(()=>{
            console.log("interval is calling");
        },2000);
        return ()=>clearInterval(details);
    },[])

    return <div>
        <ul>
            <li>Pen</li>
            <li>Pencil</li>
            <li>Sharpner</li>
        </ul>
    </div>
}

export default List;