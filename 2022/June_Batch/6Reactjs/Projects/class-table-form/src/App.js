import { Component } from 'react';
import Form from './Form/Form';
import Table from './Table/Table';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.getListDetails();
  }

  getListDetails = () => {
    axios.get("http://localhost:3000/classtable").then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (<>
      <Form />
      <Table />
    </>)
  }
}

export default App;