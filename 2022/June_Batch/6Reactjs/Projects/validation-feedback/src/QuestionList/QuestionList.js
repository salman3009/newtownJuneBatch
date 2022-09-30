import { useEffect } from 'react';
import './QuestionList.css';
import axios from 'axios';

const QuestionList = () => {

    useEffect(() => {
        getInitialDetails();
    }, [])

    const getInitialDetails = async () => {
        try {
            const api = await axios.get("http://localhost:3000/feedbackquestion");
            console.log(api.data);
        } catch (err) {
            console.log(err);
        }
    }

    return (<div>Hello</div>)
}
export default QuestionList;