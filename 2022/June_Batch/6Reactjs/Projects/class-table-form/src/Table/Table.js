import { Component } from 'react';
import './Table.css';


class Table extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<>
            <div className="marginTable container">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mobile</td>
                            <td>3000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>)
    }
}

export default Table;