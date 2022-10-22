import './Table.css';

const Table=(props)=>{
    return (<div className='container-table'>
        <table>
            <tr>
                <th>Question</th>
                <th>Answer</th>
            </tr>
            {props.global.map((obj,index)=>{
                 return (<tr key={index}>
                      <td>{obj.question}</td>
                      <td>{obj.value}</td>
                    </tr>)
            })}
        </table>
    </div>)
}
export default Table;