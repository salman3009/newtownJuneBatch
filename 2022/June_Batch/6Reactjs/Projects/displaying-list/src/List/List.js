import './List.css';

const List=(props)=>{
    return (<div className='list-box'>
        <ul>
            {props.list.map((obj,index)=>{
                return(<li key={index}>{obj}</li>)
            })}
        </ul>
    </div>)
}

export default List;