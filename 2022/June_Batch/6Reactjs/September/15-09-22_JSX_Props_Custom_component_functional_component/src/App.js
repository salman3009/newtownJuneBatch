import List from './List';
import './App.css';

function App(){
   return (<div className="container">
    <List mobile="samsung" price="3000" discount="40%"/>
    <List mobile="sony" price="6000" discount="30%"/>
    <List mobile="micromax" price="700" discount="20%"/>
   </div>)
}

export default App;






