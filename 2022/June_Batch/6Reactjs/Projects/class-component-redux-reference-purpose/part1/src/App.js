import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import {Provider} from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
<div>
<Provider store={store}>
  <BrowserRouter>
  <Header/>
  </BrowserRouter>

</Provider>
</div>

  );
}

export default App;
