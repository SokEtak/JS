import { useState } from "react";
import { v4 as uuid } from "uuid";

function getRandomEmoji() {
  const emojies = ["😎", "😛", "🥵", "😁", "😶‍🌫️", "🤩"];
  return emojies[Math.floor(Math.random() * emojies.length)];
}
export default function EmojiClicker() {
  const [emojies, setEmojies] = useState([{ id: uuid(), emoji: "😀" }]);
  const addEmoji = () => {
    // First method (not ideal):
    // setEmojies([...emojies, "😿"]); // May use stale state!

    // Second method (better):
    setEmojies((oldEmojies) => [
      ...oldEmojies,
      { id: uuid(), emoji: getRandomEmoji() },
    ]); // Correct: Uses the latest state!
  };
  const deleteEmoji = (id) => {
    console.log(id);
    setEmojies((currentEmojies) => {
      // Fix: Properly return the filtered array
      return currentEmojies.filter((e) => e.id !== id);
    });
  };
  const updateAllEmojiesToHeart = () => {
    setEmojies((oldEmojies) => {
      return oldEmojies.map((e) => ({ ...e, emoji: "😍" }));
    });
  };
  return (
    <div>
      {emojies.map((e) => {
        return (
          <span
            onClick={() => {
              deleteEmoji(e.id);
            }}
            key={e.id}
            style={{ fontSize: "6rem" }}
          >
            {e.emoji}
          </span>
        );
      })}
      <div>
        <button onClick={addEmoji}>Add New Emojies</button>
        <button onClick={updateAllEmojiesToHeart}>
          Repalce All Emojies To Hearth
        </button>
      </div>
    </div>
  );
}
