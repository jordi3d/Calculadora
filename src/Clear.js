import "./clear.css";
import { useState } from "react";

export default function Clear({ funcio }) {
  const [currentState, setState] = useState("noapretat");
  const fesClick = () => {
    setState("apretat");
    console.log("AC");
    setTimeout(() => {
      setState("noapretat");
    }, 250);
    funcio("AC");
  };
  return (
    <div className={"clear " + currentState} onClick={fesClick}>
      AC
    </div>
  );
}
