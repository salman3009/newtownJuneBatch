import './FormInput.css';

const FormInput=()=>{
     return (<div>
        <div class="form-group">
            <label>
              First Name
            </label>
            <input type="text" name="firstName"/>
        </div>
        <div class="form-group">
            <label>
              Last Name
            </label>
            <input type="text" name="lastName"/>
        </div>
        <div class="form-group">
            <label>
              Email
            </label>
            <input type="text" name="email"/>
        </div>
        <div class="form-group">
            <label>
              Password
            </label>
            <input type="text" name="password"/>
        </div>
        <div class="form-group">
            <label>
              Telephone
            </label>
            <input type="text" name="telephone"/>
        </div>
        <div class="form-group">
            <label>
              Your Bio
            </label>
            <input type="text" name="bio"/>
        </div>
        <div class="form-group">
         <button>Submit</button>
        </div>
     </div>)
}

export default FormInput;