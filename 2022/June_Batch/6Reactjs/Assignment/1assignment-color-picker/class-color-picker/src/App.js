import './App.css';
import ColorSelector from './ColorSelector/ColorSelector';
import Selection from './Selection/Selection';

function App() {
  return (
    <div className="App">
      <div>
        <ColorSelector color="red"/>
        <ColorSelector color="green" />
        <ColorSelector color="orange"/>
      </div>
      <div>
        <Selection />
        <Selection />
        <Selection />
      </div>

    </div>
  );
}

export default App;
