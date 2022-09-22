import './Section.css';
import Button from '../UI/Button/Button';
import { useRef } from 'react';

const Section=(props)=>{

    const refType = useRef(null);
    const refPasswordType = useRef(null);

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
        Email:<input ref={refType} type="text" id="email" name="fullName"/>
        </div>
        <div className="box">
        Password:<input  ref={refPasswordType} type="text"/>
        </div>
        <Button onClickHandler={onClickHandler}>Login</Button>
    </div>)
}

export default Section;