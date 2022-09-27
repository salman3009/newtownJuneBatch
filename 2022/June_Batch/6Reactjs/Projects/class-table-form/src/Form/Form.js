import { Component } from 'react';
import './Form.css';

class Form extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <div className="container">
                <form>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control" name="product" />
                    </div>
                    <div className="form-group">
                        <label>Product Amount</label>
                        <input type="number" className="form-control" name="amount" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>)
    }


}

export default Form;