import { useState } from "react";

// Function that simulates the creation of a game board (or a large array of elements)
function makingGameBoard() {
    console.log("making game board");  // Logs when the game board is created (this will only happen on the initial render)
    return Array(5000);  // Creates and returns an array of 5000 elements
}

export default function Dumbo() {
    // The commented-out line below would cause the `makingGameBoard` function to be called on every render.
    // const [n, setN] = useState(makingGameBoard()); // This would be inefficient because the game board is recreated on every render.

    // Here, we are passing the function `makingGameBoard` to `useState` directly.
    // This is a more efficient way because React will only call `makingGameBoard` once during the initial render.
    // React will store the return value (the array) as the initial state of `n`.
    const [n, setN] = useState(makingGameBoard);  // Good approach: only calls `makingGameBoard` during initial render

    return (
        <button
            onClick={() => {
                // When the button is clicked, we update the state `n` to the new value "new value".
                // This will trigger a re-render and update the value of `n` in the state.
                setN("new value");  // Changing state to a string instead of the initial array
            }}
        >
            Click Me
        </button>
    );
}
