import { useState } from "react";
import "./BoxColor.css";

export default function ColorBox({ initialColor, colors }) {
  // Manage color state in ColorBox
  const [buttonColor, setButtonColor] = useState(initialColor);

  // Function to change color when button is clicked
  const handleColorChange = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setButtonColor(randomColor); // Update button color
  };

  return (
    <div className="flex-container">
      <button
        style={{ backgroundColor: buttonColor }}
        className="flex-item"
        onClick={handleColorChange} // Handle button click
      ></button>
    </div>
  );
}
