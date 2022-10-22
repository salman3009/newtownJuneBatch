import './Button.css';
import {UserContext} from '../App';

const Button=()=>{

    return(<div>
        <button>Print - 
            <UserContext.Consumer>
            {
                obj=>{
                    return obj.counter;
                }
            }
            </UserContext.Consumer></button>
    </div>)
}

export default Button;