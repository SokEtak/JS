// import "./App.css";
import Counter from "./Counter";
import Toggler from "./Toggler";
import TogglerCounter from "./TogglerCounter";
import GridColorBox from "./GridColorBox";

const generateRandomHexColor = () => {
  // Generate a random hex color in the format "#RRGGBB"
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
};

const colors = [];
for (let i = 0; i < 25; i++) {
  colors.push(generateRandomHexColor());
}

function App() {
  return (
    <>
      <GridColorBox colors={colors} />
      {/* <Counter/> */}
      {/* <TogglerCounter /> */}
      {/* <Toggler/> */}
    </>
  );
}

export default App;
