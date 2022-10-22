
const Button=(props)=>{
     return (<>
       <button {...props} onClick={props.onClickHandler}>{props.children}</button>
     </>)
}
export default Button;