import "./Die.css";
function Die({ val,  color = "green" }) {
  return (
    <div style={{ backgroundColor: color }} className="Die">
      {val}
    </div>
  );
}
export default Die;
