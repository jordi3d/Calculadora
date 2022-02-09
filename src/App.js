import "./App.css";
import Input from "./Input";
import Boto from "./Boto";
import Clear from "./Clear";
import { useState } from "react";

function App() {
  let operacions = [];
  let setOperacions = [];
  /*const [operacions, setOperacions] = useState([]);
  const pushOperacio = ({ n }) => {
    operacions === undefined
      ? ((operacions = [0]), (setOperacions = operacions))
      : setOperacions.push({ n });
  };*/
  return (
    <div className="App">
      <div className="Butonera">
        <Input operacions={setOperacions} />
        <Clear operacions={operacions} />
        <Boto num="9" ident="boto9" operacions={operacions} />
        <Boto num="8" ident="boto8" operacions={operacions} />
        <Boto num="7" ident="boto7" operacions={operacions} />
        <Boto num="6" ident="boto6" operacions={operacions} />
        <Boto num="5" ident="boto5" operacions={operacions} />
        <Boto num="4" ident="boto4" operacions={operacions} />
        <Boto num="3" ident="boto3" operacions={operacions} />
        <Boto num="2" ident="boto2" operacions={operacions} />
        <Boto num="1" ident="boto1" operacions={operacions} />
        <Boto num="0" ident="boto0" operacions={operacions} />
        <Boto num="." ident="botoP" operacions={operacions} />
        <Boto num="+" ident="botoA" operacions={operacions} />
        <Boto num="-" ident="botoS" operacions={operacions} />
        <Boto num="/" ident="botoD" operacions={operacions} />
        <Boto num="*" ident="botoM" operacions={operacions} />
        <Boto num="=" ident="botoE" operacions={operacions} />
      </div>
    </div>
  );
}

export default App;
