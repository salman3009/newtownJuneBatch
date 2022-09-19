import './List.css';

const List=(props)=>{
    return (<div className='list-box'>
        <ul>
            <li>{props.getText}</li>
        </ul>
    </div>)
}

export default List;