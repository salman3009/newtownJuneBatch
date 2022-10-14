
import { useState } from 'react';
import './Register.css';
import {registerSuccess} from '../redux/authencation';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const dispatch = useDispatch();
    const navigation = useNavigate();

    const [getForm,setForm]=useState({
        email:'',
        username:'',
        password:''
    });

    const onChangeHandler=(event)=>{
        setForm({
          ...getForm,
          [event.target.name]:event.target.value
        });
    }

    const onSubmitHandler=(event)=>{
         event.preventDefault();
         dispatch(registerSuccess(getForm));
         navigation('/');
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                        <form>
                            <div class="form-group">
                                <label>User Name</label>
                                <input type="text" onChange={onChangeHandler} class="form-control" name="username" placeholder="Enter user name" />
                            </div>
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" onChange={onChangeHandler} class="form-control" name="email" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" onChange={onChangeHandler} class="form-control" name="password" placeholder="Password" />
                            </div>
                            <button type="submit" onClick={onSubmitHandler} class="btn btn-primary">Register</button>
                        </form>
                    </div>
                    <div className="col-4">

                    </div>
                </div>

            </div>
        </>
    )
}

export default Register;