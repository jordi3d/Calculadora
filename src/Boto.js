import "./boto.css";

function Apreta() {
  alert("Has clickat");
  document.getElementById("boto").classList.remove("noapretat");
  document.getElementById("boto").className += " apretat";
  return true;
}

function Desapreta() {
  alert("Has deixat");
  document.getElementById("boto").classList.remove("apretat");
  document.getElementById("boto").className += " noapretat";
  return true;
}

export default function Boto({ num }) {
  return (
    <div id="boto" className="botonet noapretat" onClick="Apreta();">
      {num}
    </div>
  );
}
