import { Component } from 'react';
import './Table.css';



class Table extends Component {

    constructor(props) {
        super(props);
        //to acccess any data from parent component we need to use pre-defined keyword called props
        console.log(this.props.list);
    }

    static getDerivedStateFromProps(props,state){
        return state;
    }

    // getSnapshotBeforeUpdate(prevProps,PrevState){
    //     console.log(prevProps,prevState);
    // }

    componentDidUpdate(){
         console.log("component didupdate");
    }

    render() {
        return (<>
            <div className="marginTable container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.list.map((obj, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{obj.product}</td>
                                    <td>{obj.amount}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        </>)
    }
}

export default Table;