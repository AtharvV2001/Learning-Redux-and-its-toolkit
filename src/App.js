import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Counter from './components/counter/Counter';
import { animationAction } from './actions/animationAction';
import { toggle } from './reducers/rotateSlice';

function App() {
  const isRotating = useSelector((state) => state.rotate.rotating)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={"App-logo" + (isRotating ? "" : " App-pause")} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => { dispatch(toggle()) }}>{isRotating ? 'PAUSE' : 'PLAY'}</button>
        <Counter />
      </header>
    </div>
  );
}

export default App;
