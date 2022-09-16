import React,{Component} from 'react';

class Product extends Component{

   // static getDerivedStateFromProps(props, state) {
   //    console.log('[Product.js] getDerivedStateFromProps',props);
   //    return state;
   //  }
  
    shouldComponentUpdate(nextProps, nextState) {
      console.log('[Product.js] shouldComponentUpdate');
      return true;
    }
  
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('[Product.js] componentDidUpdate');
      console.log(prevProps,prevState,snapshot);
    }
  

   render(){
      console.log("productjs")
      return (
         <div onClick={this.props.click}>
            <div>{this.props.name}</div>
            <div>{this.props.price}</div>
         </div>
     )
   }

}

export default Product