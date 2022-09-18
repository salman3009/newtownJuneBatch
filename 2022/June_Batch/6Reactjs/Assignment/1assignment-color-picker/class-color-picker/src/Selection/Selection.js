import './Selection.css';
const Selection = (props)=>{
     return(<div>
          <h2 className="subheading">Selection</h2>
          <div onClick={()=>props.applyColor(props.id)} style={{background:props.nextBackground}} className="fix-box color-selection"></div>
          </div>)
}
export default Selection;