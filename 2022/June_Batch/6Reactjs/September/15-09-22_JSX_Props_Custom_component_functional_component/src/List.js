import './List.css';

function List(props){
     
    let fullName = "akash";

    return(<div className="box">
        {2+2}
        {2>4?"yes":"no"}
        {fullName}
        <h2 className="heading">{props.mobile}</h2>
        <h4>{props.price}</h4>
        <p>{props.discount}</p>
    </div>)
}

export default List;