import './List.css';

function List(props){
        return(<div className="box">
        <h2 className="heading">{props.mobile}</h2>
        <h4>{props.price}</h4>
        <p>{props.discount}</p>
    </div>)
}

export default List;