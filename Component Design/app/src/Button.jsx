import "./Button.css"
export default function Button({myOnClickFunc , label="Click Me"}) {
  return <button onClick={myOnClickFunc} className="Button">{label}</button>;
}
