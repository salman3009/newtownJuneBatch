import { useState } from 'react';
import './FormInput.css';
import {alphaNumericValidation,emailValidation,passwordValidation,bioValidation,telephoneValidation} from '../Helper/validation';

const FormInput=()=>{
   const [getForm,setForm]=useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    telephone:'',
    bio:''
   });

   const [getFormValidation,setFormValidation]=useState({
    firstName:false,
    lastName:false,
    email:false,
    password:false,
    telephone:false,
    bio:false
   });

   const onChangeHandler=(event)=>{
      setForm({...getForm,[event.target.name]:event.target.value});
   }

   const onSubmit=()=>{
     
   }

     return (<div>
        <div className="form-group">
            <label>
              First Name
            </label>
            <input type="text" value={getForm.firstName} onChange={onChangeHandler} name="firstName"/>
           {getFormValidation.firstName && <div className="danger">First Name must be alphanumeric and contain 3 - 16 characters</div>} 
        </div>
        <div className="form-group">
            <label>
              Last Name
            </label>
            <input type="text" value={getForm.lastName} onChange={onChangeHandler}  name="lastName"/>
            {getFormValidation.lastName && <div className="danger">Last Name must be alphanumeric and contain 3 - 16 characters</div>}
        </div>
        <div className="form-group">
            <label>
              Email
            </label>
            <input type="text" value={getForm.email} onChange={onChangeHandler}  name="email"/>
            {getFormValidation.email && <div className="danger">Email must be valid address,e.g:akash@gamil.com</div>}
        </div>
        <div className="form-group">
            <label>
              Password
            </label>
            <input type="text" value={getForm.password} onChange={onChangeHandler}  name="password"/>
            {getFormValidation.password && <div className="danger">Password must be alphanumeric(@,_and - are also allowed) and between 6-20 characters</div>}
        </div>
        <div className="form-group">
            <label>
              Telephone
            </label>
            <input type="text" value={getForm.telephone} onChange={onChangeHandler}   name="telephone"/>
            {getFormValidation.telephone && <div className="danger">A valid telphone number (11 digits and 333-333-3333)</div>} 
        </div>
        <div className="form-group">
            <label>
              Your Bio
            </label>
            <input type="text" value={getForm.bio} onChange={onChangeHandler}   name="bio"/>
            {getFormValidation.bio && <div className="danger">Bio must contain only lowercase letters,underscores,hyphens and be 8-50 characters</div>}
        </div>
        <div className="form-group">
         <button>Submit</button>
        </div>
     </div>)
}

export default FormInput;