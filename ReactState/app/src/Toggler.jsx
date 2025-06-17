import { useState } from "react";
import "./Toggler.css";

export default function Toggler() {
  let [heart, setHeart] = useState(false);
  let [count, setCount] = useState(false);

  // Method 1 (longer)
  // const imageSrc = !heart ? "/heart(0).png" : "/heart(1).png"; // For method 1 (using image source)

  // Method 2 (shorter) - toggling boolean state directly
  const imgAlt = !heart ? "unlike heart img" : "liked heart img";
  const isToggledClass = !heart ? "toggle-off" : "toggle-on";

  const updateHeartToggleState = () => {
    // Method 1 (longer),should initialize it with 0 if suing this method
    // setHeart((prevHeart) => (prevHeart === 0 ? 1 : 0)); // Update the state of heart based on its value

    // Method 2 (shorter)
    setHeart(!heart); // Directly toggles the boolean value of heart
  };
  return (
    <div
      className={`${isToggledClass} toggler`} // Add dynamic class for toggling
      onClick={updateHeartToggleState}
      alt={imgAlt}
    >
      {/* <img src={imageSrc} alt={imgAlt} /> */}{" "}
      {/* If using Method 1 to display the image */}
      <div>
        <h1>0</h1>
        <button>+1</button>
      </div>
    </div>
  );
}
