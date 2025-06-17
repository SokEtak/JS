import { useState } from "react";
//without state u cannot update the ui
export default function Counter() {
  let [num, setNum] = useState(0);
  console.log("Component execute again");
  console.log(`num:${num}`);
  const incrementNum = () => {
    setNum(num + 1); //increase it by one every click,unlimitted
    // setNum(3)//set the maximum , on click it value will be set to this n after that cannot update it anymore
    console.log("inside setNum running");
    console.log(num);
  };

  return (
    <div>
      <h1>Clicked:{num}</h1>
      <button onClick={incrementNum}>Increase Me</button>
    </div>
  );
}
