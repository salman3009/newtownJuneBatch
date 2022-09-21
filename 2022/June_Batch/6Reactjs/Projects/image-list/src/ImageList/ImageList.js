import './ImageList.css';
import image from '../assets/image/1car.png';

const ImageList = (props)=>{

    const imageStyle={
        width:'400px'
    };

   return (<div className="image-box">
    <img onClick={props.onChangeImageHandler} style={imageStyle} src={image}/>
   </div>)
}

export default ImageList;