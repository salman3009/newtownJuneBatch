import { Component } from "react";
import './App.css';

class FormInput extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(<div className="form-box">
            <p>Balance:{this.props.amount}</p>
            <input type="number" name="amount" onChange={this.props.onChangeHandler}/>
            <button onClick={this.props.onAddHandler} name="add">Add</button>
            <button onClick={this.props.onRemoveHandler} name="remove">Remove</button>
        </div>)
    }
}

export default FormInput;