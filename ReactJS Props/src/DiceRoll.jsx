import Dice from "./Dice";

export default function DiceRoll() {
  return (
    <>
      <Dice /> {/* Works fine, no props */}
      <Dice numSides={12} /> {/* Correctly passing a number prop */}
      {/* <Person name="Koko" from="Ki" /> */}
      {/* <Person name="Jojo" from="Go" /> */}
    </>
  );
}
