import './Section.css';
import Button from '../UI/Button/Button';
import { useRef } from 'react';
import InputForwardRef from '../UI/InputForwardRef';
const Section=(props)=>{

    const refType = useRef();
    const refPasswordType = useRef();

    const onClickHandler=()=>{
        console.log(refType.current.value);
        // console.log(refType.current.id);
        // console.log(refType.current.name);
        // refType.current.focus();
        // refType.current.disabled = true;
        // console.log(refType.current);
        console.log(refPasswordType.current.value);
    }

    return (<div className="container">
        {props.children}
        <div className="box">
        {/* Email:<input ref={refType} type="text" id="email" name="fullName"/> */}
         Email:<InputForwardRef type="email" id="email" name="fullName" ref={refType}/>
        </div>
        <div className="box">
        Password:<input  ref={refPasswordType} type="password"/>
        </div>
        <Button id="login" name="loginsubmit" onClickHandler={onClickHandler}>Login</Button>
    </div>)
}

export default Section;