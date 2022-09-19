import './List.css';

const List=(props)=>{
    return (<div className='list-box'>
        <ul>
            {props.list.map((obj,index)=>{
                return(<div className="list" key={index}>
                    <li>{obj}</li>
                    <button className="list-button" onClick={()=>props.onEditHandler(index)}>Edit</button>
                    <button className="list-button" onClick={()=>props.onDeleteHandler(index)}>Delete</button>
                </div>)
            })}
        </ul>
    </div>)
}

export default List;