import { Component } from 'react';
import Form from './Form/Form';
import Table from './Table/Table';
import axios from 'axios';
import Person from './Person';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {

  //it is use to initialize the state
  constructor(props) {
    // console.log("constructor");
    super(props);
    this.state = {
      flag:true,
      list: [],
      form: {
        product: '',
        amount: ''
      }
    }
  }

  static getDerivedStateFromProps(props,state){
    // console.log("getDerivedStateFromProps");
    //  console.log(props,state);
     return true;
  }

  //first time rendering and binding any api below method is used
  componentDidMount() {
    // console.log("componentDidMount");
    this.getListDetails();
  }

  //api call with axios method
  // getListDetails = () => {
  //   axios.get("http://localhost:3000/classtable").then((response) => {
  //     console.log(response.data);
  //     this.setState({list:response.data})
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }

  getListDetails = async () => {
    try {
      let result = await axios.get("http://localhost:3000/classtable");
      //state will impact only list variable not form variable
      this.setState({ list: result.data });
    }
    catch (err) {
      // console.log(err);
    }
  }

  onChangeHandler = (event) => {
    //state will impact form object not list variable
    this.setState({
      form: {
        ...this.state.form, [event.target.name]: event.target.value
      }
    })
  }

  onSubmitHandler = async (event) => {
    try {
      //to prevent from submitting the form
      event.preventDefault();
      // console.log(this.state.form);
      //post method consists of two paramets (url,payload)
      let result = await axios.post("http://localhost:3000/classtable", this.state.form);
      // console.log(result);
      //calling list again to fetch updated data from backend
      this.getListDetails();
    } catch (err) {

    }
  }

  onChangeFlagHandler=()=>{
    this.setState({
      flag:false
    })
  }



  render() {
    // console.log("render");
    let component;
    if(this.state.flag){
      component = <Table list={this.state.list} />
    }
    return (<>
     <ErrorBoundary>
     {component}
     <Person name="jack"/>
    <button onClick={this.onChangeFlagHandler}>Change Flag</button>
      <Form onSubmitHandler={this.onSubmitHandler} onChangeHandler={this.onChangeHandler} />
      </ErrorBoundary>            
    </>)
  }
}

export default App;