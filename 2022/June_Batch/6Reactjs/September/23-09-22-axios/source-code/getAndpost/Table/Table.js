import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Table = () => {

  const [getList,setList]=useState([]);
  const [getFlag,setFlag]=useState(false);

  useEffect(() => {
    initialDetails();
  }, []);

  const initialDetails = () => {
    try {
      axios.get('http://localhost:3000/product').then((response) => {
        console.log(response.data);
        setList([...response.data]);
        setFlag(true);
      }).catch((error) => {
        console.log(error);
        setFlag(false);
      })
    } catch (err) {
      console.log(err);
    }
  }

  return (<div>
    {getFlag ? <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Amount</th>
          <th scope="col">Duration</th>
        </tr>
      </thead>
      <tbody>
          {getList.map((obj,index)=>{
             return(<tr key={index}>
              <td>{index+1}</td>
             <td>{obj.title}</td>
             <td>{obj.amount}</td>
             <td>{obj.duration}</td>
             </tr>)
          })}
      </tbody>
    </table>:<h1 style={{textAlign:"center"}}>No Data found</h1>}
   
  </div>)
}
export default Table;