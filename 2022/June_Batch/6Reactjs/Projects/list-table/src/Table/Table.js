


const Table = (props) => {

 
  return (<div>
    {props.getFlag ? <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Amount</th>
          <th scope="col">Duration</th>
        </tr>
      </thead>
      <tbody>
          {props.getList.map((obj,index)=>{
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