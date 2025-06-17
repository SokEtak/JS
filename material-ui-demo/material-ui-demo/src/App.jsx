import "./App.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";
import RatingDemo from "./RatingDemo";
import FormDemo from "./FormDemo";
import Navbar from "./Navbar";
import AvatarDemo from "./AvatarDemo";

function App() {
  return (
    <div>
      <Navbar />
      <FormDemo />
      <AlarmIcon/>
      <RatingDemo/>
      <Button/>
      <AvatarDemo/> 
    </div>
  );
}

export default App;
