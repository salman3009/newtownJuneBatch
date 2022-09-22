
const Button=(props)=>{
     return (<>
       <button onClick={props.onClickHandler}>{props.children}</button>
     </>)
}
export default Button;