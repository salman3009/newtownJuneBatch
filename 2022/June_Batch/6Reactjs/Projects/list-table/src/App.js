import './App.css';
import Table from './Table/Table';
import Form from './Form/Form';
import axios from 'axios';
import {useEffect,useState} from 'react';

function App() {

  const [getList,setList]=useState([]);
  const [getFlag,setFlag]=useState(false);

  useEffect(() => {
    initialDetails();
  }, []);

  const initialDetails = () => {
    try {
      axios.get('http://localhost:3000/product').then((response) => {
        console.log(response.data);
        setList([...response.data]);
        setFlag(true);
      }).catch((error) => {
        console.log(error);
        setFlag(false);
      })
    } catch (err) {
      console.log(err);
    }
  }

  const onSubmitHandler=(payload)=>{
    axios.post('http://localhost:3000/product',payload).then((response)=>{
      console.log(response);
      initialDetails();
    }).catch((error)=>{
       console.log(error);
    })
  }


  return (
    <div className="App">
      <Form onSubmitHandler={onSubmitHandler}/>
      <Table getFlag={getFlag} getList={getList}/>
    </div>
  );
}

export default App;
