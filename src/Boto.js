import "./boto.css";
import { useState } from "react";

export default function Boto({ num }, { ident }) {
  const [oldState, setState] = useState("noapretat");
  const fesClick = () => {
    setState("apretat");
    console.log(num);
    setTimeout(() => {
      setState("noapretat");
    }, 250);
  };
  return (
    <div id={ident} className={"botonet " + oldState} onClick={fesClick}>
      {num}
    </div>
  );
}
