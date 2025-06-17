import "./App.css";
import Counter from "./Counter";
import Dumbo from "./Dumbo";
import ScoreKeeper from "./Scorekeeper";
import EmojiClicker from "./EmojiClicker";
import ScoreKeeperAdvance from "./ScoreKeeperAdvance";
const getRandomNumPlayers = () => Math.floor((Math.random()*10)+2)
function App() {
  return (
    <>
      <ScoreKeeperAdvance numPlayers={getRandomNumPlayers()} />
      {/* <EmojiClicker/> */}
      {/* <ScoreKeeper/> */}
      {/* <Counter/> */}
      {/* <Dumbo/> */}
    </>
  );
}

export default App;
