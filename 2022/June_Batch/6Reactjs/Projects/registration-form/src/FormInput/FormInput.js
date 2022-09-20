import { useEffect, useState } from 'react';
import './FormInput.css';
import {alphaNumericValidation,emailValidation,passwordValidation,bioValidation,telephoneValidation} from '../Helper/validation';

const FormInput=()=>{

   const [getGlobal,setGlobal]=useState(false);
   const [getConfirm,setConfirm]=useState(true);

   const [getForm,setForm]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirm:'',
    telephone:'',
    bio:''
   });

   const [getFormValidation,setFormValidation]=useState({
    firstName:false,
    lastName:false,
    email:false,
    password:false,
    telephone:false,
    bio:false,
    confirm:false
   });

   useEffect(()=>{
    formValidationCheck();
   },[getForm])

   const onChangeHandler=(event)=>{
      setForm({...getForm,[event.target.name]:event.target.value}); 
   }

   const formValidationCheck=()=>{
    setFormValidation({
        firstName:alphaNumericValidation(getForm.firstName),
        lastName:alphaNumericValidation(getForm.lastName),
        email:emailValidation(getForm.email),
        password:passwordValidation(getForm.password),
        confirm:passwordValidation(getForm.confirm),
        telephone:telephoneValidation(getForm.telephone),
        bio:bioValidation(getForm.bio)  
    });   
   }

   const onSubmit=()=>{
    formValidationCheck();
    setGlobal(true);
    console.log(getForm);
    if( getForm.password!="" && getForm.confirm!="" && getForm.password === getForm.confirm){
        setConfirm(false);
    }
    else{
        setConfirm(true);
    }
  
   }

     return (<div>
        {getGlobal && getConfirm && <div className="danger">password there is no match</div>}
        <div className="form-group">
            <label>
              First Name
            </label>
            <input type="text" value={getForm.firstName} onChange={onChangeHandler} name="firstName"/>
           {getGlobal && getFormValidation.firstName && <div className="danger">First Name must be alphanumeric and contain 3 - 16 characters</div>} 
        </div>
        <div className="form-group">
            <label>
              Last Name
            </label>
            <input type="text" value={getForm.lastName} onChange={onChangeHandler}  name="lastName"/>
            {getGlobal && getFormValidation.lastName && <div className="danger">Last Name must be alphanumeric and contain 3 - 16 characters</div>}
        </div>
        <div className="form-group">
            <label>
              Email
            </label>
            <input type="email" value={getForm.email} onChange={onChangeHandler}  name="email"/>
            {getGlobal && getFormValidation.email && <div className="danger">Email must be valid address,e.g:akash@gamil.com</div>}
        </div>
        <div className="form-group">
            <label>
              Password
            </label>
            <input type="password" value={getForm.password} onChange={onChangeHandler}  name="password"/>
            {getGlobal && getFormValidation.password && <div className="danger">Password must be alphanumeric(@,_and - are also allowed) and between 6-20 characters</div>}
        </div>
        <div className="form-group">
            <label>
             Confirm Password
            </label>
            <input type="password" value={getForm.confirm} onChange={onChangeHandler}  name="confirm"/>
            {getGlobal && getFormValidation.confirm && <div className="danger">Password must be alphanumeric(@,_and - are also allowed) and between 6-20 characters</div>}
        </div>
        <div className="form-group">
            <label>
              Telephone
            </label>
            <input type="text" value={getForm.telephone} onChange={onChangeHandler}   name="telephone"/>
            {getGlobal && getFormValidation.telephone && <div className="danger">A valid telphone number (11 digits and 333-333-3333)</div>} 
        </div>
        <div className="form-group">
            <label>
              Your Bio
            </label>
            <input type="text" value={getForm.bio} onChange={onChangeHandler}   name="bio"/>
            {getGlobal && getFormValidation.bio && <div className="danger">Bio must contain only lowercase letters,underscores,hyphens and be 8-50 characters</div>}
        </div>
        <div className="form-group">
         <button onClick={onSubmit}>Submit</button>
        </div>
     </div>)
}

export default FormInput;