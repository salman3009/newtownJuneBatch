import { Component } from 'react';
import Form from './Form/Form';
import Table from './Table/Table';
import axios from 'axios';

class App extends Component {

  //it is use to initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: []
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

   getListDetails = async ()=>{
    try{
    let result = await axios.get("http://localhost:3000/classtable");
    this.setState({list:result.data});
    }
    catch(err){
      console.log(err);
    }
  }

  render() {
    return (<>
      <Form />
      {this.state.list && this.state.list.length>0 && <Table list={this.state.list}/>}
    </>)
  }
}

export default App;