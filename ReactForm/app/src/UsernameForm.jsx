// controlled Component
import { useState } from "react";

function UsernameForm() {
  const [username, setUsername] = useState("");
  const updateUsername = (evt) => {
    console.log(evt.target.value);
    setUsername((currentUsername) => evt.target.value);
  };
  return (
    <>
      {/* we cannot user for as html version at this case */}
      {/* htmlFor */}
      <label htmlFor="username">username</label>
      <input
        name="username"
        type="text"
        value={username}
        onChange={updateUsername}
      />
      <button>Submit</button>
    </>
  );
}
export default UsernameForm;
