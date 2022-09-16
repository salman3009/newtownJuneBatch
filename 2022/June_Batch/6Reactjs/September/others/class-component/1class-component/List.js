import { Component } from "react";
import './App.css';

class List extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="list-box">
            <h4>Transactions</h4>
            {
                this.props.selectionList.map((obj,index) => {
                    return (<div key={index}>
                        <strong>
                            {obj.date}-{obj.expense}-{obj.type}
                        </strong>
                    </div>)
                })
            }


        </div>)
    }
}

export default List;