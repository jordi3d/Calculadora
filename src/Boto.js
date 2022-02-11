import "./boto.css";
import { useState } from "react";

export default function Boto({ num }, { funcio }) {
  const [currentState, setState] = useState("noapretat");
  const fesClick = () => {
    setState("apretat");
    console.log(num);
    setTimeout(() => {
      setState("noapretat");
    }, 250);
    console.log("manolito", { funcio });
  };
  return (
    <div
      id={"boto" + num}
      className={"botonet " + currentState}
      onClick={fesClick}
    >
      {num}
    </div>
  );
}
