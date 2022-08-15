import logo from './logo.svg';
import './App.css';
import Loom from "./components/loom";
import DecrementButton from "./components/decrementButton";
import {Counter} from "./pages/counter";
import IncrementButton from "./components/incrementButton";

function App() {
  return (
    <div className="App">
      <Loom/>
      {/*  <DecrementButton />*/}
      {/*  <Counter />*/}
        {/*<IncrementButton />*/}
    </div>
  );
}

export default App;
