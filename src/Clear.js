import "./clear.css";
import { useState } from "react";

export default function Clear({ operacions }) {
  const [oldState, setState] = useState("noapretat");
  const fesClick = () => {
    setState("apretat");
    console.log("AC");
    setTimeout(() => {
      setState("noapretat");
    }, 250);
    operacions("0");
  };
  return (
    <div className={"clear " + oldState} onClick={fesClick}>
      AC
    </div>
  );
}
