import { useState } from "react";
import Box from "./Box";
import "./BoxGrid.css";
import Button from "./Button";

function BoxGrid({ numBoxes = 3 }) {
  //   const [boxes, setBoxes] = useState([false, false, true, false, false, false]);
  const [boxes, setBoxes] = useState(new Array(numBoxes).fill(false));
  const reset = () => {
    setBoxes(new Array(numBoxes).fill(false));
  };
  const toggleBox = (idx) => {
    setBoxes((oldBoxes) => {
      return oldBoxes.map((value, i) => {
        if (i === idx) return !value;
        return value;
      });
    });
  };
  return (
    <>
      <div className="BoxGrid">
        {boxes.map((b, index) => {
          return (
            <Box myOnClick={() => toggleBox(index)} isActice={b} key={index} />
          );
        })}
      </div>
      <Button myOnClickFunc={reset} label="reset" />
    </>
  );
}

export default BoxGrid;
