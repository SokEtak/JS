import "./App.css";
import LuckyN from "./LuckYN";
import { sum } from "./utils";
import Box from "./Box";
import BoxGrid from "./BoxGrid";

function isLessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((d) => d === dice[0]);
}

function App() {
  return (
    <>
      <BoxGrid numBoxes={10}/>
      {/* <LuckyN winCheck={isLessThan4} tittle="Less Than 4 Dice Game" />
      <LuckyN numDice={3} winCheck={allSameValue} tittle="The Same Dice Game" /> */}
    </>
  );
}

export default App;
