import './Container.css';
import Table from '../Table/Table';

const Container = (props) => {

    return (<div className="container">
        <div className='box'>Container Component</div>
        <Table  counter={props.counter}/>
    </div>)

}

export default Container;