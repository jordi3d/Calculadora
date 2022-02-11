import "./App.css";
import Output from "./Output";
import Boto from "./Boto";
import Clear from "./Clear";

export function opera(n, pila) {
  console.log("voilà");
  switch (n) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      if (pila.length > 1) {
        let a = pila.pop();
        let b = a.length;
        let n0 = parseInt(n);
        let a0 = parseInt(a);
        if (a.indexOf(".") === b) pila.push(a + "." + n);
        else {
          let c = a0 * 10 + n0;
          pila.push(c.toString());
        }
      } else pila.push(n);
      break;
    case "+":
      if (pila.length > 2) {
        let a1 = pila.pop();
        let b1 = pila.pop();
        pila.push(a1 + b1);
      }
      break;
    case "-":
      if (pila.length > 2) {
        let a2 = pila.pop();
        let b2 = pila.pop();
        pila.push(a2 - b2);
      }
      break;
    case "/":
      if (pila.length > 2) {
        let a3 = pila.pop();
        let b3 = pila.pop();
        if (b3) pila.push(a3 / b3);
        else alert("Divisió per 0");
      }
      break;
    case "*":
      if (pila.length > 2) {
        let a4 = pila.pop();
        let b4 = pila.pop();
        pila.push(a4 * b4);
      }
      break;
    /*case ".":
      console.log("%s .", pila);
      if (pila.length < 2) pila.push("0.");
      else {
        let a5 = pila.pop();
        pila.push(a5 + ".");
      }
      break;*/
    case "=":
      return pila[1];
    case "AC":
      pila[1] = ["0"];
      return null;
    default:
      return pila[1];
  }
  console.log("Pantalla: %s", pila[1]);
  return pila[0];
}

function App() {
  let pila = ["0"];
  return (
    <div className="App">
      <div className="Butonera">
        <Output funcio={opera("=", pila)} />
        <Clear funcio={opera("AC", pila)} />
        <Boto num="7" funcio={opera("7", pila)} />
        <Boto num="8" funcio={opera("8", pila)} />
        <Boto num="9" funcio={opera("9", pila)} />
        <Boto num="4" funcio={opera("4", pila)} />
        <Boto num="5" funcio={opera("5", pila)} />
        <Boto num="6" funcio={opera("6", pila)} />
        <Boto num="1" funcio={opera("1", pila)} />
        <Boto num="2" funcio={opera("2", pila)} />
        <Boto num="3" funcio={opera("3", pila)} />
        <Boto num="0" funcio={opera("0", pila)} />
        <Boto num="." funcio={opera(".", pila)} />
        <Boto num="+" funcio={opera("+", pila)} />
        <Boto num="-" funcio={opera("-", pila)} />
        <Boto num="/" funcio={opera("/", pila)} />
        <Boto num="*" funcio={opera("*", pila)} />
        <Boto num="=" funcio={opera("=", pila)} />
      </div>
    </div>
  );
}

export default App;
