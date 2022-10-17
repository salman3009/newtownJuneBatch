import React ,{useState} from 'react';
import Input from '../UI/Input/Input';
import {register} from '../../Actions/auth';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Register =({register})=>{

let[getState,updateState]=useState({
    orderForm: {
      name: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'Your Name'
          },
          value: '',
          validation: {
              required: true
          },
          valid: false,
          touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
            type: 'email',
            placeholder: 'Your E-Mail'
        },
        value: '',
        validation: {
            required: true
        },
        valid: false,
        touched: false
    },
      password: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'password'
          },
          value: '',
          validation: {
            required: true,
            minLength: 5,
            maxLength: 5
        },
          valid: false,
          touched: false
      },
      confirmPassword: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'Confirm password'
          },
          value: '',
          validation: {
              required: true,
              minLength: 5,
              maxLength: 5
          },
          valid: false,
          touched: false
      },

  },
  formIsValid: false,
  loading: false      
  });

 const checkValidity=(value, rules)=> {
    let isValid = true;
    
    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    return isValid;
}


const submitHandler = ( event ) => {
    event.preventDefault();
    debugger;
    updateState( { loading: true } );
    const formData = {};
    for (let formElementIdentifier in getState.orderForm) {
        formData[formElementIdentifier] = getState.orderForm[formElementIdentifier].value;
    }
    const order = {
        orderData: formData
    }
    let {name,email,password}=order.orderData;
    register({name,email,password});
}



const inputChangedHandler = (event, inputIdentifier) => {
    debugger;
    const updatedOrderForm = {
        ...getState.orderForm
    };
    const updatedFormElement = { 
        ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
    updatedFormElement.touched = true;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    
    let formIsValid = true;
    for (let inputIdentifier in updatedOrderForm) {
        formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }
    updateState({orderForm: updatedOrderForm, formIsValid: formIsValid});
}

debugger;
const formElementsArray = [];
for (let key in getState.orderForm) {
  formElementsArray.push({
      id: key,
      config: getState.orderForm[key]
  });
}
    let form = (
      <form className="form" onSubmit={submitHandler}>
            {formElementsArray.map(formElement => (
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    changed={(event) => inputChangedHandler(event, formElement.id)} />
            ))}
            <button type='submit' disabled={!getState.formIsValid}>Register</button>
        </form>
    );

    return(<div><section className="container">
    <h1 className="large text-primary">Sign Upa</h1>
 
    {form}
    
    <p className="my-1">
      Already have an account? <a href="login.html">Sign In</a>
    </p>
  </section></div>)

}

Register.propTypes ={
    register:PropTypes.func.isRequired,
  };
  
  export default connect(null,{register})(Register)