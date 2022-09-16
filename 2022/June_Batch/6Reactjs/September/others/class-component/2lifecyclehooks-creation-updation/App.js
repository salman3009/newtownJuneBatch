import './App.css';
import React,{Component} from 'react';
import Product from './Product';
class App extends Component {

  constructor(prop) {
    super(prop);
    console.log('[App.js] constructor');
    this.state={
      product:[
        {name:"sony",price:"200"},
        {name:"Samsung",price:"200"}
      ]
    }
  }
    //Change2
  static getDerivedStateFromProps(prop, state) {
    console.log('[App.js] getDerivedStateFromProps', prop);
    return state;
  }
  //Change3
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  updateStateHandler=()=>{
    this.setState({
      product:[
         {name:"micro",price:"200"},
         {name:"micro",price:"200"}
      ]
    })
  }
  render(){
    console.log('[App.js] render');
    return (
      <div className="App">
        <div>Hello world</div>
        <Product click={this.updateStateHandler} name={this.state.product[0].name} price={this.state.product[0].price}/>
        <Product  click={this.updateStateHandler} name={this.state.product[1].name} price={this.state.product[1].price}/>
      </div>
    );
  }

}

export default App;
