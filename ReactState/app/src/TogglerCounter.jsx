import { useState } from "react";
import "./Toggler.css";

export default function TogglerCounter() {
  let [heart, setHeart] = useState(false);
  let [count, setCount] = useState(0);
  
  const isToggledClass = !heart ? "toggle-off" : "toggle-on";

  const updateHeartToggleState = () => {
    setHeart(!heart); // Directly toggles the boolean value of heart
  };

  const incrementCount = () => {
    setCount(count+=1);
  };
  return (
    <div>
      {/* image state */}
      <div
        className={`${isToggledClass} toggler`} // Add dynamic class for toggling
        onClick={updateHeartToggleState}
      ></div>
      <div>
        {/* counter state */}
        <h1>{!count?0:count}</h1>
        <button onClick={incrementCount}>+1</button>
      </div>
    </div>
  );
}
