import { useEffect, useState } from 'react';
import './QuestionList.css';
import axios from 'axios';
import Table from '../Table/Table';

const QuestionList = () => {

    const [getList, setList] = useState([]);
    const [getAnswer,setAnswer]=useState([]);
    const [getFlag,setFlag] = useState(false);

    useEffect(() => {
        getInitialDetails();
    }, [])

    useEffect(()=>{
       let list=[];
        if(getList.length){
            for(let obj of getList){
                list.push({
                    question:obj.question,
                    id:obj.id,
                    value:''
                })
            }
            setAnswer([...list]);
        }
    },[getList]);

    useEffect(()=>{
       console.log(getAnswer);
    },[getAnswer])

    const getInitialDetails = async () => {
        try {
            const api = await axios.get("http://localhost:3000/feedbackquestion");
            //console.log(api.data);
            setList([...api.data]);
        } catch (err) {
           // console.log(err);
        }
    }

    const onSelectionIndex=(id,data)=>{
        let list = getAnswer;
        let index=-1;
           for(let i=0 ;i<list.length;i++){
              if(list[i].id === id){
                  index=i;
                  break;
              }
           }
        list[index].value = data;
        setAnswer([...list]);
           console.log(index,data);
    }

    const onSubmitHandler=()=>{
        setFlag(true);
    }

    return (<>
    <div className='container'>
        {getList.map((obj, index) => {
            return (<div className="heading" key={index}>
                <h3>{obj.question}</h3>
                {obj.options.map((data, i) => {
                    return (
                        <div key={i}>
                            <input onClick={()=>onSelectionIndex(obj.id,data)} type="radio" value={data} name={index} />
                            {data}
                        </div>
                    )
                })}

            </div>)
        })}
        <button onClick={onSubmitHandler}>Submit</button>

    </div>
    <div>
      {getFlag && <Table global={getAnswer}/> }  
    </div>
    </>)
}
export default QuestionList;