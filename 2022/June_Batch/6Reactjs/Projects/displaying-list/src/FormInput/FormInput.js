import './FormInput.css';

const FormInput = (props)=>{
    return(<div className="form-box">
        <input type="text" name="notes" onChange={props.onSetChangeHandler}/>
        <button>ADD</button>
    </div>)
}

export default FormInput;