import "./clear.css";

export default function Clear({ operacions }) {
  const Esborra = () => {
    operacions = [];
    console.log({ operacions });
  };
  return (
    <div className="clear" onClick={Esborra}>
      AC
    </div>
  );
}
