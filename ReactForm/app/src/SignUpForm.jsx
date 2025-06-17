// Working with mutiple input
import { useState } from "react";

function SigUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const updatefirstName = (evt) => {
    setFirstName(evt.target.value);
  };
  const updateLastName = (evt) => {
    setLastName(evt.target.value);
  };
  const handleSubmit = () =>{
    console.log("Submitted")
    console.log(`FirstName:${firstName}-LastName:${lastName}`)
  }
  return (
    <>
      <label htmlFor="firstName">FirstName:</label>
      <input
        id="firstName"
        type="text"
        value={firstName}
        onChange={updatefirstName}
      />
      <br />
      <label htmlFor="lastName">LastName:</label>
      <input
        id="lastName"
        type="text"
        value={lastName}
        onChange={updateLastName}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
export default SigUpForm;
