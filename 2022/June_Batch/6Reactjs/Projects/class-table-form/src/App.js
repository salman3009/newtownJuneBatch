import { Component } from 'react';
import Form from './Form/Form';
import Table from './Table/Table';
import axios from 'axios';

class App extends Component {

  //it is use to initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      form: {
        product: '',
        amount: ''
      }
    }
  }

  //first time rendering and binding any api below method is used
  componentDidMount() {
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
      console.log(err);
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
      event.preventDefault();
      console.log(this.state.form);
      let result = await axios.post("http://localhost:3000/classtable", this.state.form);
      console.log(result);
      this.getListDetails();
    } catch (err) {

    }
  }

  render() {
    return (<>
      <Form onSubmitHandler={this.onSubmitHandler} onChangeHandler={this.onChangeHandler} />
      {this.state.list && this.state.list.length > 0 && <Table list={this.state.list} />}
    </>)
  }
}

export default App;