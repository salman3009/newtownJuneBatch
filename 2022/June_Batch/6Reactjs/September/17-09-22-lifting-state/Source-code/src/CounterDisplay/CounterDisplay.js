import './CounterDisplay.css';

const CounterDisplay=(props)=>{
    return (<div className='container-display'>
            <p>The updated value is: {props.counter}</p>
    </div>)
}

export default CounterDisplay;