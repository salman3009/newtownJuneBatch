import './Table.css';
import Button from '../Button/Button';
import { UserContext } from '../App';

const Table=(props)=>{
    return (<div>
        <table>
            <tr>
                <th>Name - </th>
                <th>calculate</th>
            </tr>
            <tr>
                <td><UserContext.Consumer>
                       {
                        obj=>{
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