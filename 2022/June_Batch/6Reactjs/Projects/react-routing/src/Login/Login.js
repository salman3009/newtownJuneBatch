
import './Login.css';
//step 1 useNavigate for internal routing
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const Login = () => {

    //step2: do the instantiation for using useNavigation
    const navigation = useNavigate();
    const [getForm,setForm] = useState({
        email:'',
        password:''
    });

    useEffect(()=>{
          console.log(getForm);
    },[getForm])

    const onChangeHandler=(event)=>{
        setForm({
          ...getForm,[event.target.name]:event.target.value
        })
    }

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        let id= 343;
        alert("onSubmit");
        //step 3: use navigation and put th product name
        //search params or query params
            navigation(`/product/${id}?email=${getForm.email}&password=${getForm.password}`);  
    }
    
    return (<div className="container">
        <div className="row">
            <div className="col-4">

            </div>
            <div className="col-4">
                <form>
                    <div class="form-group">
                        <label>Email address</label>
                        <input type="email" onChange={onChangeHandler} class="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" onChange={onChangeHandler} class="form-control" name="password" placeholder="Password" />
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