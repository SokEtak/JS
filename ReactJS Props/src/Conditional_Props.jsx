export default function Conditional_Props() {
  const rand = Math.floor(Math.random() * 10 + 1);
  let isEven = false;
  let style = {color:rand%2==0?"green":"red"}
  if (rand % 2 === 0) {
    isEven = true;
  }
  return (
    <>
      <h1 style={style}>
        {rand} is an even number? {isEven.toString()}
      </h1>
    </>
  );
}
