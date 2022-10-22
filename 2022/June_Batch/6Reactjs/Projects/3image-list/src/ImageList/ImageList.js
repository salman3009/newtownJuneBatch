import './ImageList.css';
import image  from '../image';

const ImageList = (props)=>{

    console.log(props.id);

    const imageStyle={
        width:'400px'
    };

   return (<div className={props.id==0?'image-box':'image-box-one'}>
    <img onClick={props.onChangeImageHandler} style={imageStyle} src={image[props.id].src}/>
   </div>)
}

export default ImageList;