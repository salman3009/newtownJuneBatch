import './Modal.css';
import  ReactDOM  from 'react-dom';

const Modal =()=>{

    const rootElement = document.getElementById("element-root");
    return ReactDOM.createPortal(<div>Modal</div>,rootElement);
}

export default Modal;