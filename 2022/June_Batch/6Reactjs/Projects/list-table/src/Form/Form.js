const Form = (props) => {

    return (<div>
        <form>
            <div class="form-group">
                <label>Title</label>
                <input type="text" value={props.title} onChange={props.onChangeHandler}  class="form-control" name="title" />
            </div>
            <div class="form-group">
                <label>Amount</label>
                <input type="text" value={props.amount} onChange={props.onChangeHandler} class="form-control" name="amount" />
            </div>
            <div class="form-group">
                <label>Duration</label>
                <input type="text" value={props.duration} onChange={props.onChangeHandler} class="form-control" name="duration" />
            </div>
            {props.getEditStatus?<button onClick={props.onEditFinalSubmitHandler} type="submit" class="btn btn-primary">Edit</button>:<button onClick={props.onSubmitHandler} type="submit" class="btn btn-primary">Submit</button>}
        </form>
    </div>)
}
export default Form;