import { Link,Outlet } from "react-router-dom";


const Users=(props)=>{
   
    console.log(props.list);
      return (<div>  
            
                <ul>
{
        props.list.map((obj)=>{
            return(<li key={obj.id}>
                <Link to={obj.fullName}>{obj.fullName}</Link>
            </li>)

        })
}
                </ul>   
                <Outlet />       
      </div>)
}
export default Users;