import "./App.css";
import Input from "./Input";
import Boto from "./Boto";
import Clear from "./Clear";
import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([]);
  let resultat = 0;

  return (
    <div className="App">
      <div className="Butonera">
        <Input num={resultat} />
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
        <Boto num="." />
        <Boto num="+" />
        <Boto num="-" />
        <Boto num="/" />
        <Boto num="*" />
        <Clear operations={numbers} />
      </div>
    </div>
  );
}

export default App;
