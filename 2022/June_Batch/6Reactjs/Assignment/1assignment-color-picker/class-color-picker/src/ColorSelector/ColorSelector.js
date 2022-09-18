import './ColorSelector.css'

const ColorSelector=(props)=>{
    return(<div style={{backgroundColor:props.color}} className='color-selector'></div>)
}

export default ColorSelector;