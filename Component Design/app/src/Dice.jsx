import "./Dice.css";
import Die from "./Die";

function Dice({ dice, color }) {
  console.log(dice);
  return (
    <div className="Dice">
      {dice.map((d, i) => {
        return <Die key={i} val={d} color={color} />;
      })}
    </div>
  );
}
export default Dice;
