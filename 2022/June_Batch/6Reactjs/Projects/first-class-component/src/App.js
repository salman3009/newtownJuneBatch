import {Component} from 'react';
import './App.css';
// import React from "react";


// class App extends React.Component{

// }

class App extends Component{

  constructor(props){
     super(props);
     this.state={
      counter:0
     }
     this.onIncrementHandler = this.onIncrementHandler.bind(this);

  }

  onIncrementHandler(){
    console.log(this.state.counter);
    this.setState({
      counter:this.state.counter+1
    })
  }

  onDecreementHandler=()=>{
    console.log(this.state.counter);
    this.setState({
      counter:this.state.counter-1
    })
  }

  render(){
    const Style={
      textAlign:"center",
      fontSize:"22px"
    }

     return(<div className="container">
      <h1 style={Style}>Counter:{this.state.counter}</h1>
      <button onClick={this.onIncrementHandler}>Increment</button>
      <button onClick={this.onDecreementHandler}>Decrement</button>
     </div>)
  }

}

export default App;

