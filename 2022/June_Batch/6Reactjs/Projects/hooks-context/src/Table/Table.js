import './Table.css';
import Button from '../Button/Button';

const Table=(props)=>{
    return (<div>
        <table>
            <tr>
                <th>Name</th>
                <th>calculate</th>
            </tr>
            <tr>
                <td>Akash</td>
                <td><Button counter={props.counter}/></td>
            </tr>
        </table>
    </div>)
}

export default Table;