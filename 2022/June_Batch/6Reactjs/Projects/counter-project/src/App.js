import './App.css';
import CounterInput from './CounterInput/CounterInput';
import CounterButton from './CounterButton/CounterButton';
import CounterDisplay from './CounterDisplay/CounterDisplay';
function App() {
  return (
    <div className="App">
       <CounterInput/>
       <CounterButton/>
       <CounterDisplay/>
    </div>
  );
}

export default App;
