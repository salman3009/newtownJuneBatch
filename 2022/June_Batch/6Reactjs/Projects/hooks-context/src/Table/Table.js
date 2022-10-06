import './Table.css';
import Button from '../Button/Button';
//Step4: please import the UserContext
import { UserContext } from '../App';

const Table=(props)=>{
    return (<div>
        <table>
            <tr>
                <th>Name - </th>
                <th>calculate</th>
            </tr>
            <tr>
                {/* Step 5: you can use the Consumer to access the data using 
                the callback function */}
                <td><UserContext.Consumer>
                       {
                        (obj)=>{
                            return obj.name;
                        }
                       }
                    </UserContext.Consumer></td>
                <td><Button counter={props.counter}/></td>
            </tr>
        </table>
    </div>)
}

export default Table;