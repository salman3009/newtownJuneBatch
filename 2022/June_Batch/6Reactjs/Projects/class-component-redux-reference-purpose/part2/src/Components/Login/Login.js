import React ,{useState} from 'react';

const Login=()=>{

    let[getState,updateState]=useState({
      email:'',
      password:''      
    });

    let[getStateValidation,updateStateValidation]=useState({
      validationMessage:'Please enter the below details'      
    });

   const updateEventHandler=(event)=>{
      updateState({
        ...getState,
        [event.target.name]:event.target.value
      })
   }    

   const onSubmitEventHandler=(event)=>{
    
    event.preventDefault();
    if(getState.email=='' || getState.email == null){
      updateStateValidation({
        validationMessage:"Please provide valid email id"
      })
      return;
    }

    if(getState.password=='' || getState.password==null){
      updateStateValidation({
        validationMessage:"Please provide valid password"
      })
      return;
    }

    
    if(getState.email!="salman444g@gmail.com" || getState.password!="123456"){
      updateStateValidation({
        validationMessage:"Invalid credentials. Please check it again"
      })
      return;
    }

    if(getState.email=="salman444g@gmail.com" && getState.password=="123456"){
      alert("success"); 
      updateStateValidation({
        validationMessage:"Success"
      })
      return;
    }
    
   
    
   }


    return(<div>
         <section className="container">
      <div className="alert alert-danger">
        {getStateValidation.validationMessage}
      </div>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" onSubmit={onSubmitEventHandler}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={getState.email}
            onChange={updateEventHandler}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={getState.password}
            onChange={updateEventHandler}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <a href="register.html">Sign Up</a>
      </p>
    </section>
    </div>)
}

export default Login;