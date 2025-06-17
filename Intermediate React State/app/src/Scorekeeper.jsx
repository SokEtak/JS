import { useState } from "react";

export default function ScoreKeeper() {
  // Initialize state with the scores for both players set to 0
  // 'scores' is an object with two properties: player1Score and player2Score
  const [scores, setScores] = useState({ player1Score: 0, player2Score: 0 });

  // Function to increment player 1's score by 1
  const addPlayer1Score = () => {
    // The line below is commented out because it's incorrect to directly mutate the state in React.
    // This will NOT trigger a re-render and could lead to unexpected behavior.
    // scores.player1Score += 1; 
    // console.log(scores.player1Score);
    
    // Correct approach: Use a functional update to set the new state.
    setScores((oldScore) => {
      // Using the spread operator to copy the existing scores, and update player1Score
      return { 
        ...oldScore,  // Spread the old scores to keep player2Score unchanged
        player1Score: oldScore.player1Score + 1  // Increment player1Score by 1
      };
    });
  };

  // Function to increment player 2's score by 1
  const addPlayer2Score = () => {
    // Similar to the `addPlayer1Score`, we use a functional update for player2Score
    setScores((oldScore) => {
      return { 
        ...oldScore,  // Spread the old scores to keep player1Score unchanged
        player2Score: oldScore.player2Score + 1  // Increment player2Score by 1
      };
    });
  };

  return (
    <>
      {/* Render the current scores for player 1 and player 2 */}
      <h1>Player1: {scores.player1Score}</h1>
      <h1>Player2: {scores.player2Score}</h1>

      {/* Buttons to increment the scores of player 1 and player 2 */}
      <button onClick={addPlayer1Score}>+1 Player 1</button>
      <button onClick={addPlayer2Score}>+1 Player 2</button>
    </>
  );
}
