
import './Register.css';
import Header from '../Header/Header';
const Register = () => {
    return (
        <>
            <Header getLoginStatus={false} />
            <div className="container">
                <div className="row">
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                        <form>
                            <div class="form-group">
                                <label>User Name</label>
                                <input type="text" class="form-control" name="username" placeholder="Enter user name" />
                            </div>
                            <div class="form-group">
                                <label>Email address</label>
                                <input type="email" class="form-control" name="email" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input type="password" class="form-control" name="password" placeholder="Password" />
                            </div>
                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input type="password" class="form-control" name="confirmpassword" placeholder="Confirm Password" />
                            </div>
                            <button type="submit" class="btn btn-primary">Register</button>
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