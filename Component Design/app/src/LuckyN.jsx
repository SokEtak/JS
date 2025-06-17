import { useState } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice";
import Button from "./Button";

export default function LuckyN({
  tittle = "Dice Game",
  numDice = 2,
  winCheck,
}) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = winCheck(dice);
  const roll = () => setDice(getRolls(numDice));
  return (
    <div className="LuckyN">
      <h1>
        {tittle} {isWinner && ": You win!!"}
      </h1>
      <Dice dice={dice} />
      {/* <button onClick={roll}>Re-Roll</button> */}
      <Button myOnClickFunc={roll} label={"Re-Roll"}/>
    </div>
  );
}
