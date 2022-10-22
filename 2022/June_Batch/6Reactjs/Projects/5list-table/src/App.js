import './App.css';
import Table from './Table/Table';
import Form from './Form/Form';
import axios from 'axios';
import {useEffect,useState} from 'react';

function App() {

  const [getList,setList]=useState([]);
  const [getFlag,setFlag]=useState(false);
  const [getEditStatus,setEditStatus] = useState(false);
  const [getEditObject,setEditObject]=useState({
    title:'',
    amount:'',
    duration:''
  })
  const[getId,setId]=useState(-1);

  useEffect(() => {
    initialDetails();
  }, []);

  const onChangeHandler=(event)=>{
    setEditObject({
        ...getEditObject,
       [event.target.name]:event.target.value
    })
 }

  const initialDetails = () => {
    try {
      axios.get('http://localhost:3000/product').then((response) => {
        console.log(response.data);
        //to fetch table data
        setList([...response.data]);
        //to hide the table container
        setFlag(true);
      }).catch((error) => {
        console.log(error);
        setFlag(false);
      })
    } catch (err) {
      console.log(err);
    }
  }

  const onSubmitHandler=(event)=>{
    event.preventDefault();
    axios.post('http://localhost:3000/product',getEditObject).then((response)=>{
      console.log(response);
      //to set the form with empty
      setEditObject({
        title:'',
        amount:'',
        duration:''
      });
      initialDetails();
    }).catch((error)=>{
       console.log(error);
    })
  }

  const onDeleteHandler=(id)=>{
       axios.delete(`http://localhost:3000/product/${id}`).then((response)=>{
             initialDetails();  
       }).catch((error)=>{
         console.log(error);
       }) 
  }

  const onEditInitialHandler=(index,id)=>{
    console.log(index,id);
    //to show edit or submit button
       setEditStatus(true);
    //to send id while submitting for patch method
       setId(id);
       //to update the form
       setEditObject({
        title:getList[index].title,
        amount:getList[index].amount,
        duration:getList[index].duration
       })
  }

  const onEditFinalSubmitHandler=(event)=>{
    event.preventDefault();
         console.log(getEditObject);
      axios.patch(`http://localhost:3000/product/${getId}`,getEditObject).then((response)=>{
        setEditObject({
          title:'',
          amount:'',
          duration:''
        });
        setEditStatus(false);
      initialDetails();
      }).catch((error)=>{
           console.log(error);
      })
  }


  return (
    <div className="App">
      <Form onChangeHandler={onChangeHandler} onEditFinalSubmitHandler={onEditFinalSubmitHandler} title={getEditObject.title} amount={getEditObject.amount} duration={getEditObject.duration} getEditStatus={getEditStatus} onEditInitialHandler={onEditInitialHandler} onSubmitHandler={onSubmitHandler}/>
      <Table onEditInitialHandler={onEditInitialHandler} onDeleteHandler={onDeleteHandler} getFlag={getFlag} getList={getList}/>
    </div>
  );
}

export default App;
