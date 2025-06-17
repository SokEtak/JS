import ColorBox from "./ColorBox.Jsx";

export default function GridColorBox({ colors }) {
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const boxes = Array.from({ length: colors.length }, (_, index) => (
    <ColorBox key={index} initialColor={getRandomColor()} colors={colors} />
  ));

  return <div className="grid-container">{boxes}</div>;
}
