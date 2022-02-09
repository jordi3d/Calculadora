import "./App.css";
import Input from "./Input";
import Boto from "./Boto";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input num="0" />
        <Boto num="9" />
        <Boto num="8" />
        <Boto num="7" />
        <Boto num="6" />
        <Boto num="5" />
        <Boto num="4" />
        <Boto num="3" />
        <Boto num="2" />
        <Boto num="1" />
        <Boto num="0" />
      </header>
    </div>
  );
}

export default App;
