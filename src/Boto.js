import "./boto.css";

export default function Boto({ num, ident, operacions }) {
  const Apreta = () => {
    console.log(num);
    console.log(ident);
    document.getElementById(ident).classList.remove("noapretat");
    document.getElementById(ident).className += " apretat";
    setTimeout(() => {
      console.log("waiting...");
    }, 2000);
    /*document.getElementById(ident).classList.remove("apretat");
    document.getElementById(ident).className += " noapretat";*/
    operacions.push(num);
    console.log(operacions);
  };
  return (
    <div id={ident} className="botonet noapretat" onClick={Apreta}>
      {num}
    </div>
  );
}
