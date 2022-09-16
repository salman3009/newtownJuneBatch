import { Component } from 'react';
import './App.css';
import FormInput from './FormInput';
import List from './List';
import axios from 'axios';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      balance:0,
      expense:0,
      list:[]
    };
  }



   shouldComponentUpdate(currentProps,CurrentState){
    console.log(CurrentState);
    return true;
   }

  onChangeHandler=(e)=>{
      this.setState({expense:e.target.value});
  }

  onAddHandler=()=>{
    this.setState({balance:(this.state.balance+Number(this.state.expense)),list:[...this.state.list,{
      expense:this.state.expense,
      type:"ADD",
      date:new Date().toISOString()
    }]})
     
  }

  onRemoveHandler=()=>{
    this.setState({balance:(this.state.balance>Number(this.state.expense)?this.state.balance-Number(this.state.expense):0),list:[...this.state.list,{
      expense:this.state.expense,
      type:"REMOVE",
      date:new Date().toISOString()
    }]})

  }


  render(){
    return (
      <div className="App">
        <h1>Expense Tracker - Basic</h1>
          <FormInput onRemoveHandler={this.onRemoveHandler} onAddHandler={this.onAddHandler} onChangeHandler={this.onChangeHandler} amount={this.state.balance}/>
          <List selectionList={this.state.list}/>
      </div>
    );
  }

}

export default App;
