import './ColorSelector.css'

const ColorSelector=(props)=>{
    return(<div onClick={()=>props.onSelectorHandler(props.color)} style={{backgroundColor:props.color}} className='color-selector'>
        <label>{props.color}</label>
    </div>)
}

export default ColorSelector;