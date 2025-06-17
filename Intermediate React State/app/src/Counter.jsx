import React from "react";
import { useState } from "react";

// A functional component that handles a counter
const Counter = () => {
  console.log("rendered"); // Logs each time the component re-renders

  // Declare a state variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  // Function to increment the count by 1
  const addOne = () => {
    setCount((currentCount) => currentCount + 1); 
    // Correct way to update state based on the previous value of the state.
    // `setCount` here is a function that receives the previous state (`currentCount`) 
    // and returns the new state value (previous count + 1).

    console.log(count); 
    // Logs 'count' here, but it will log the old value of count because 
    // React updates state asynchronously, and the render cycle isn't complete yet.
  };

  // Function to increment the count by 3 (This can be problematic if done sequentially)
  const addThree = () => {
    setCount((currentCount) => currentCount + 3); 
    // Updates the state by adding 3 to the current count.

    // Since React batches state updates for performance reasons, the `setCount` calls
    // are not applied immediately. React will group the updates and process them after
    // the current render cycle completes. So, `count` here will still show the old value 
    // because React hasn't re-rendered the component yet with the new state value.
    
    console.log(count); // Logs 'count' with its previous value (not updated immediately)
  };

  // Function to set count directly to 10
  const setToTen = () => {
    setCount(10);  // Directly sets the count to 10
  };

  return (
    <div>
      <h1>{count}</h1> {/* Displays the current value of 'count' */}
      <button onClick={addOne}>+1</button> {/* Adds 1 to count */}
      <button onClick={addThree}>+3</button> {/* Adds 3 to count */}
      <button onClick={setToTen}>+10</button> {/* Sets count directly to 10 */}
    </div>
  );
};

export default Counter;
