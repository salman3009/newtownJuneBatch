
import './Login.css';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    //step2: do the instantiation for using useNavigation
    const navigation = useNavigate();

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        navigation('/product');  
            
    }
    

    return (<div className="container">
        <div className="row">
            <div className="col-4">

            </div>
            <div className="col-4">
                <form>
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email"  class="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password"  class="form-control" name="password" placeholder="Password" />
                    </div>
                    <button  onClick={onSubmitHandler} type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
            <div className="col-4">

            </div>
        </div>

    </div>)
}

export default Login;