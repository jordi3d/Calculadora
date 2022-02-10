import "./App.css";
import Output from "./Output";
import Boto from "./Boto";
import Clear from "./Clear";
import { useState } from "react";

function App() {
  const [oldState, setState] = useState("noapretat");
  const [isQue, setQue] = useState(null);
  /*  const fesClick = () => {
    setState("apretat");
    setTimeout(() => {
      setState("noapretat");
    }, 250);
  };*/
  return (
    <div className="App">
      <div className="Butonera">
        <Output operacions={isQue} />
        <Clear operacions={setQue} />
        <Boto num="7" ident="boto7" />
        <Boto num="8" ident="boto8" />
        <Boto num="9" ident="boto9" />
        <Boto num="4" ident="boto4" />
        <Boto num="5" ident="boto5" />
        <Boto num="6" ident="boto6" />
        <Boto num="1" ident="boto1" />
        <Boto num="2" ident="boto2" />
        <Boto num="3" ident="boto3" />
        <Boto num="0" ident="boto0" />
        <Boto num="." ident="botoP" />
        <Boto num="+" ident="botoA" />
        <Boto num="-" ident="botoS" />
        <Boto num="/" ident="botoD" />
        <Boto num="*" ident="botoM" />
        <Boto num="=" ident="botoE" />
      </div>
    </div>
  );
}

export default App;
