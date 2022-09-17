import './CounterButton.css';

const CounterButton=(props)=>{
   return(<div className="container-button">
    <button onClick={props.onIcrementHandler}>Increment</button><button onClick={props.onDecrementHandler}>Decrement</button>
</div>) 
}

export default CounterButton;