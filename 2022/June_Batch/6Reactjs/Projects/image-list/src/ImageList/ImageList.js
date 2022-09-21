import './ImageList.css';
// import image from '../assets/image/1car.png';

import image  from '../image';

const ImageList = (props)=>{

    console.log(props.id);

    const imageStyle={
        width:'400px'
    };

   return (<div className="image-box">
    <img onClick={props.onChangeImageHandler} style={imageStyle} src={image[props.id].src}/>
   </div>)
}

export default ImageList;