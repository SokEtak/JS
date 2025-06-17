import { useState } from "react";

export default function ScoreKeeperAdvance({
  numPlayers = 2, // Default number of players is 2
  TargetScore = 3, // Default target score is 3
}) {
  // Initial state for player scores. Each player starts with a score of 0.
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));

  // Function to add 1 to a player's score when they press the "+1" button.
  const addOne = (index) => {
    setScores((currentScores) => {
      // Using .map to update the score of the player at the given index.
      return currentScores.map((score, idx) => {
        if (idx === index) return score + 1; // Increment the score of the player at the given index.
        return score; // Keep other players' scores unchanged.
      });
    });
  };

  // Function to reset all players' scores to 0 when the reset button is clicked.
  const resetScores = () => {
    setScores(new Array(numPlayers).fill(0)); // Create a new array of zeros to reset scores.
  };

  return (
    <div>
      <h1>Score Keeper Advance</h1>
      <ul>
        {/* Map over each player's score and render their information */}
        {scores.map((score, index) => {
          const isWinner = score === TargetScore; // Check if a player has reached the target score
          return (
            <div key={index}>
              {/* Display the player's score */}
              Player {index + 1}: {score}
              {/* Disable the "+1" button if the player has won */}
              <button disabled={isWinner} onClick={() => addOne(index)}>
                +1
              </button>
              {/* If the player has reached the target score, show "Winner" */}
              {isWinner ? <span> Winner</span> : ""}
            </div>
          );
        })}
      </ul>
      {/* Reset all players' scores */}
      <button onClick={resetScores}>Reset</button>
    </div>
  );
}
