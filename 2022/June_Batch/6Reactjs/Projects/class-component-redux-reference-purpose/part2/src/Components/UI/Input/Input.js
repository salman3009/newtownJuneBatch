import React from 'react';
const input = ( props ) => {
    let inputElement = null;
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        default:
            inputElement = <input
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className="form-group">
            {inputElement}
    {props.invalid?<div className="alert alert-danger">
             Invalid
           </div>:null}
        </div>
    );

};

export default input;